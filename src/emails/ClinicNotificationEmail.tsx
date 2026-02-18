import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ClinicNotificationEmailProps {
  formData: {
    fullName: string
    email: string
    phone: string
    treatmentInterest: string
    preferredDate: string
    message?: string
    submittedAt: string
  }
}

export function ClinicNotificationEmail({ formData }: ClinicNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Consultation Request - Feel Aesthetic Clinic</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>📋 New Consultation Request</Heading>
          
          <Text style={paragraph}>
            A new consultation request has been submitted through the website.
          </Text>

          <Section style={tableContainer}>
            <div style={table}>
              <div style={tableRow}>
                <div style={tableHeader}>Field</div>
                <div style={tableHeader}>Details</div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Patient Name</div>
                <div style={tableCell}>{formData.fullName}</div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Email</div>
                <div style={tableCell}>
                  <a href={`mailto:${formData.email}`} style={link}>
                    {formData.email}
                  </a>
                </div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Phone</div>
                <div style={tableCell}>
                  <a href={`tel:${formData.phone}`} style={link}>
                    {formData.phone}
                  </a>
                </div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Treatment Interest</div>
                <div style={tableCell}>{formData.treatmentInterest}</div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Preferred Date</div>
                <div style={tableCell}>{formData.preferredDate}</div>
              </div>
              <div style={tableRow}>
                <div style={tableCell}>Submitted At</div>
                <div style={tableCell}>{formData.submittedAt}</div>
              </div>
            </div>
          </Section>

          {formData.message && (
            <Section style={messageSection}>
              <Heading style={h2}>Additional Notes:</Heading>
              <Text style={messageText}>{formData.message}</Text>
            </Section>
          )}

          <Section style={actionSection}>
            <Text style={actionText}>
              <strong>Action Required:</strong> Please contact the patient within 24 hours to schedule their consultation.
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              This notification was generated automatically from the Feel Aesthetic Clinic website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '20px',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
}

const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2C2C2C',
  margin: '0 0 20px',
}

const h2 = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#2C2C2C',
  margin: '0 0 12px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#5A5A5A',
  margin: '0 0 20px',
}

const tableContainer = {
  margin: '20px 0',
}

const table = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  display: 'table',
}

const tableRow = {
  display: 'table-row',
}

const tableHeader = {
  display: 'table-cell',
  backgroundColor: '#F6F2EE',
  padding: '12px',
  fontWeight: 'bold',
  color: '#2C2C2C',
  border: '1px solid #E8DDD4',
}

const tableCell = {
  display: 'table-cell',
  padding: '12px',
  border: '1px solid #E8DDD4',
  color: '#5A5A5A',
}

const link = {
  color: '#9CAF9C',
  textDecoration: 'none',
}

const messageSection = {
  margin: '20px 0',
  padding: '16px',
  backgroundColor: '#F6F2EE',
  borderRadius: '8px',
}

const messageText = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#5A5A5A',
  fontStyle: 'italic',
  margin: '0',
}

const actionSection = {
  margin: '20px 0',
  padding: '16px',
  backgroundColor: '#9CAF9C',
  borderRadius: '8px',
  color: '#ffffff',
}

const actionText = {
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0',
  color: '#ffffff',
}

const hr = {
  borderColor: '#E8DDD4',
  margin: '20px 0',
}

const footer = {
  textAlign: 'center' as const,
}

const footerText = {
  fontSize: '12px',
  color: '#8A8A8A',
  margin: '0',
}