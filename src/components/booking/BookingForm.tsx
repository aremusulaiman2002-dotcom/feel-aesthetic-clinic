'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle, AlertCircle, Calendar, Phone, Mail, User, MessageSquare, FileText } from 'lucide-react'

// Form validation schema
const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  treatmentInterest: z.string().min(1, 'Please select a treatment interest'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  message: z.string().optional(),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: 'You must consent to our privacy policy to proceed'
  }),
  website: z.string().max(0, 'Invalid submission')
})

type BookingFormData = z.infer<typeof bookingSchema>

const treatmentOptions = [
  { value: '', label: '-- Select a treatment --' },
  { value: 'dermal-fillers', label: 'Dermal Fillers' },
  { value: 'botox', label: 'Anti-Wrinkle Treatments (Botox)' },
  { value: 'skin-boosters', label: 'Skin Boosters' },
  { value: 'facials', label: 'Medical Facials' },
  { value: 'microneedling', label: 'Microneedling' },
  { value: 'fat-dissolving', label: 'Fat Dissolving' },
  { value: 'packages', label: 'Treatment Packages' },
  { value: 'consultation-only', label: 'General Consultation' },
  { value: 'other', label: 'Other / Not Sure' }
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      treatmentInterest: '',
      gdprConsent: false,
      website: ''
    }
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking request')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="text-center py-8 lg:py-12">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          Your consultation request has been received. Our team will contact you within 24 hours to schedule your appointment.
        </p>
        <div className="bg-background rounded-xl p-6 border-2 border-border max-w-md mx-auto">
          <h4 className="font-bold mb-3 text-lg">What happens next?</h4>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span className="text-text-secondary">You'll receive a confirmation email shortly</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span className="text-text-secondary">Our clinic team will call you to schedule</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span className="text-text-secondary">Prepare for your 60-minute consultation</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Submission Error</p>
            <p className="text-red-700 text-sm">{submitError}</p>
          </div>
        </div>
      )}

      {/* Honeypot - Hidden */}
      <div className="hidden">
        <input
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-text-primary placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none ${
              errors.fullName ? 'border-red-300 bg-red-50/50' : 'border-border'
            }`}
            {...register('fullName')}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email & Phone - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-text-primary placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none ${
                errors.email ? 'border-red-300 bg-red-50/50' : 'border-border'
              }`}
              {...register('email')}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-text-primary placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none ${
                errors.phone ? 'border-red-300 bg-red-50/50' : 'border-border'
              }`}
              {...register('phone')}
              placeholder="+44 1234 567890"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Treatment Interest */}
        <div>
          <label htmlFor="treatmentInterest" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Treatment Interest <span className="text-primary">*</span>
          </label>
          <select
            id="treatmentInterest"
            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4QThBOEEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.25rem] pr-12 ${
              errors.treatmentInterest ? 'border-red-300 bg-red-50/50' : 'border-border'
            }`}
            {...register('treatmentInterest')}
          >
            {treatmentOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.treatmentInterest && (
            <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.treatmentInterest.message}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Preferred Consultation Date <span className="text-primary">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none ${
              errors.preferredDate ? 'border-red-300 bg-red-50/50' : 'border-border'
            }`}
            {...register('preferredDate')}
          />
          {errors.preferredDate && (
            <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.preferredDate.message}
            </p>
          )}
          <p className="text-text-light text-sm mt-2 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            We'll do our best to accommodate your preferred date
          </p>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-secondary mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            Additional Notes <span className="text-text-light">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl text-text-primary placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 outline-none resize-y min-h-[120px]"
            {...register('message')}
            placeholder="Any specific concerns, questions, or preferences you'd like to share..."
          />
        </div>

        {/* GDPR Consent */}
        <div className="bg-background rounded-xl p-5 border-2 border-border">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="gdprConsent"
              className="w-5 h-5 rounded-md border-2 border-border text-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-200 cursor-pointer mt-1"
              {...register('gdprConsent')}
            />
            <div>
              <label htmlFor="gdprConsent" className="font-medium text-text-primary cursor-pointer">
                GDPR Consent <span className="text-primary">*</span>
              </label>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                I consent to Feel Aesthetic Clinic storing my information for the purpose of 
                responding to my enquiry in accordance with the{' '}
                <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>.
              </p>
              {errors.gdprConsent && (
                <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.gdprConsent.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white rounded-2xl font-medium transition-all duration-200 hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-14 px-8 text-base lg:text-lg flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing Request...
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            Request Consultation
          </>
        )}
      </button>

      {/* Form Footer */}
      <p className="text-center text-text-light text-xs leading-relaxed">
        Fields marked with <span className="text-primary">*</span> are required. 
        By submitting this form, you agree to our{' '}
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
      </p>
    </form>
  )
}