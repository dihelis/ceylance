import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Ceylance"

interface ContactNotificationProps {
  name?: string
  email?: string
  company?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, company, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New enquiry from {name || 'someone'} via ceylance.com</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Hr style={hr} />
        <Text style={label}>Name</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        {company && (
          <>
            <Text style={label}>Company</Text>
            <Text style={value}>{company}</Text>
          </>
        )}
        <Text style={label}>Message</Text>
        <Text style={value}>{message || '—'}</Text>
        <Hr style={hr} />
        <Text style={footer}>Sent from the {SITE_NAME} website contact form</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New enquiry from ${data.name || 'someone'}${data.company ? ` (${data.company})` : ''}`,
  displayName: 'Contact form notification',
  to: 'hello@ceylance.com',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', company: 'Acme Corp', message: 'I would like to discuss a new project.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#111827', margin: '0 0 8px', fontFamily: "'Space Grotesk', Arial, sans-serif" }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const label = { fontSize: '12px', fontWeight: '600' as const, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 2px' }
const value = { fontSize: '15px', color: '#111827', margin: '0 0 16px', lineHeight: '1.5', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#9ca3af', margin: '0' }
