import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER_SMTP || '')

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    if (!process.env.EMAIL_SERVER_SMTP) {
      throw new Error('EMAIL_SERVER_SMTP not configured')
    }
    
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@dhyanshivindia.in',
      to,
      subject,
      html,
    })
    
    console.log('Email sent successfully:', result.messageId)
    return result
  } catch (error) {
    console.error('Email sending error:', {
      error: error instanceof Error ? error.message : String(error),
      to,
      from: process.env.EMAIL_FROM,
      smtpConfigured: !!process.env.EMAIL_SERVER_SMTP,
    })
    throw error
  }
}
