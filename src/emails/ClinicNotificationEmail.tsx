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
  Table,
  Row,
  Column,
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
            <Table style={table}>
              <Row>
                <Column style={tableHeader}>Field</Column>
                <Column style={tableHeader}>Details</Column>
              </Row>
              <Row>
                <Column style={tableCell}>Patient Name</Column>
                <Column style={tableCell}>{formData.fullName}</Column>
              </Row>
              <Row>
                <Column style={tableCell}>Email</Column>
                <Column style={tableCell}>
                  <a href={`mailto:${formData.email}`} style={link}>
                    {formData.email}
                  </a>
                </Column>
              </Row>
              <Row>
                <Column style={tableCell}>Phone</Column>
                <Column style={tableCell}>
                  <a href={`tel:${formData.phone}`} style={link}>
                    {formData.phone}
                  </a>
                </Column>
              </Row>
              <Row>
                <Column style={tableCell}>Treatment Interest</Column>
                <Column style={tableCell}>{formData.treatmentInterest}</Column>
              </Row>
              <Row>
                <Column style={tableCell}>Preferred Date</Column>
                <Column style={tableCell}>{formData.preferredDate}</Column>
              </Row>
              <Row>
                <Column style={tableCell}>Submitted At</Column>
                <Column style={tableCell}>{formData.submittedAt}</Column>
              </Row>
            </Table>
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
}

const tableHeader = {
  backgroundColor: '#F6F2EE',
  padding: '12px',
  textAlign: 'left' as const,
  fontWeight: 'bold',
  color: '#2C2C2C',
  border: '1px solid #E8DDD4',
}

const tableCell = {
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