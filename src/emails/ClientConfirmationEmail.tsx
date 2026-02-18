import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ClientConfirmationEmailProps {
  patientName: string
  treatmentInterest: string
}

export function ClientConfirmationEmail({ 
  patientName, 
  treatmentInterest 
}: ClientConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Consultation Request - Feel Aesthetic Clinic</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <div style={logoContainer}>
                  <span style={logoText}>F</span>
                </div>
                <Heading style={brandName}>Feel Aesthetic Clinic</Heading>
                <Text style={tagline}>Nurse-Led Natural Aesthetic Treatments</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Thank You for Your Interest</Heading>
            
            <Text style={paragraph}>
              Dear {patientName},
            </Text>

            <Text style={paragraph}>
              Thank you for your interest in Feel Aesthetic Clinic. We've received your consultation request for{' '}
              <strong>{treatmentInterest}</strong> and our team is reviewing it.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightText}>
                <strong>What happens next?</strong>
              </Text>
              <Text style={highlightText}>
                1. Our clinic team will contact you within <strong>24 hours</strong> to schedule your consultation
              </Text>
              <Text style={highlightText}>
                2. You'll have a 60-minute comprehensive consultation with Nurse Practitioner Funmi
              </Text>
              <Text style={highlightText}>
                3. Receive your personalized treatment plan based on your aesthetic goals
              </Text>
            </Section>

            <Text style={paragraph}>
              At Feel Aesthetic Clinic, we focus on natural-looking results that enhance your features with care and precision. 
              Our nurse-led approach ensures every treatment is performed with the highest standards of medical safety.
            </Text>

            <Text style={paragraph}>
              <strong>Clinic Contact Information:</strong>
            </Text>
            <Text style={contactInfo}>
              📍 123 Clinic Street, London, UK<br />
              📞 +44 1234 567890<br />
              ✉️ info@feelaestheticclinic.com
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Feel Aesthetic Clinic. All rights reserved.
            </Text>
            <Text style={footerNote}>
              A nurse-led aesthetic clinic focusing on natural, subtle enhancements.
            </Text>
            
            <Text style={footerLinks}>
              <Link href="/privacy-policy" style={link}>Privacy Policy</Link> • 
              <Link href="/terms" style={link}> Terms</Link> • 
              <Link href="/medical-disclaimer" style={link}> Medical Disclaimer</Link>
            </Text>

            <Text style={disclaimer}>
              This email is confidential and intended solely for the addressee. If you have received this email in error, please delete it.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#F6F2EE',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
  borderRadius: '16px',
  border: '1px solid #E0D6CC',
}

const header = {
  padding: '20px 0',
}

const logoContainer = {
  width: '60px',
  height: '60px',
  backgroundColor: '#9CAF9C',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 12px',
}

const logoText = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
}

const brandName = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#2C2C2C',
  margin: '0',
  textAlign: 'center' as const,
}

const tagline = {
  fontSize: '12px',
  color: '#8A8A8A',
  letterSpacing: '1px',
  textAlign: 'center' as const,
  margin: '4px 0 0',
}

const hr = {
  borderColor: '#E8DDD4',
  margin: '20px 0',
}

const content = {
  padding: '0 20px',
}

const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2C2C2C',
  margin: '0 0 20px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#5A5A5A',
  margin: '0 0 20px',
}

const highlightBox = {
  backgroundColor: '#F6F2EE',
  borderLeft: '4px solid #9CAF9C',
  padding: '16px',
  margin: '24px 0',
  borderRadius: '8px',
}

const highlightText = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#5A5A5A',
  margin: '0 0 8px',
}

const contactInfo = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#5A5A5A',
  margin: '20px 0',
  paddingLeft: '20px',
}

const footer = {
  padding: '20px',
  textAlign: 'center' as const,
}

const footerText = {
  fontSize: '12px',
  color: '#8A8A8A',
  margin: '0 0 8px',
}

const footerNote = {
  fontSize: '11px',
  color: '#8A8A8A',
  margin: '0 0 16px',
}

const footerLinks = {
  fontSize: '12px',
  color: '#8A8A8A',
  margin: '0 0 16px',
}

const link = {
  color: '#9CAF9C',
  textDecoration: 'none',
  margin: '0 8px',
}

const disclaimer = {
  fontSize: '10px',
  color: '#8A8A8A',
  lineHeight: '1.4',
  margin: '20px 0 0',
}