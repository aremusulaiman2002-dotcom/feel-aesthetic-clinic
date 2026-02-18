import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ClientConfirmationEmail } from '@/emails/ClientConfirmationEmail'
import { ClinicNotificationEmail } from '@/emails/ClinicNotificationEmail'
import LRUCache from 'lru-cache'

// Rate limiting setup
const rateLimitCache = new LRUCache({
  max: 500,
  ttl: 1000 * 60 * 15, // 15 minutes
})

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CLINIC_EMAIL = process.env.CLINIC_EMAIL || 'info@feelaestheticclinic.com'
const CLIENT_EMAIL_FROM = process.env.CLIENT_EMAIL_FROM || 'consultations@feelaestheticclinic.com'

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

// Rate limiting function
function isRateLimited(ip: string): boolean {
  const limit = 5 // 5 requests per window
  const current = (rateLimitCache.get(ip) as number) || 0
  
  if (current >= limit) {
    return true
  }
  
  rateLimitCache.set(ip, current + 1)
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Honeypot validation
    if (body.website && body.website.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Basic validation
    if (!body.fullName || !body.email || !body.treatmentInterest || !body.gdprConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      treatmentInterest: body.treatmentInterest,
      preferredDate: body.preferredDate || 'Not specified',
      message: body.message?.trim() || '',
      submittedAt: new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/London',
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      gdprConsent: body.gdprConsent
    }

    // If Resend is not configured, return success for development
    if (!resend) {
      console.log('📧 Email sending disabled - development mode')
      console.log('Form submission:', formData)
      
      return NextResponse.json({
        success: true,
        message: 'Consultation request received (development mode)'
      })
    }

    // Send emails
    const emailPromises = []

    // 1. Send confirmation to client
    emailPromises.push(
      resend.emails.send({
        from: `Feel Aesthetic Clinic <${CLIENT_EMAIL_FROM}>`,
        to: [formData.email],
        subject: 'Your Consultation Request - Feel Aesthetic Clinic',
        react: ClientConfirmationEmail({
          patientName: formData.fullName,
          treatmentInterest: formData.treatmentInterest
        })
      })
    )

    // 2. Send notification to clinic
    emailPromises.push(
      resend.emails.send({
        from: 'Feel Aesthetic Clinic Website <website@feelaestheticclinic.com>',
        to: [CLINIC_EMAIL],
        subject: `New Consultation Request: ${formData.fullName}`,
        react: ClinicNotificationEmail({ formData })
      })
    )

    // Wait for all emails to be sent
    await Promise.all(emailPromises)

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully'
    })

  } catch (error) {
    console.error('Booking API error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process booking request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Add OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}