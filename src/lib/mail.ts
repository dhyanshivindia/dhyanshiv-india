import nodemailer from 'nodemailer'

// Parse SMTP URL to extract components
const parseSmtpUrl = (urlString: string) => {
  // Format: smtp://username:password@host:port
  const match = urlString.match(/^smtp:\/\/([^:]+):(.+)@([^:]+):(\d+)$/)
  if (!match) {
    return null
  }
  return {
    user: decodeURIComponent(match[1]),
    pass: decodeURIComponent(match[2]),
    host: match[3],
    port: parseInt(match[4], 10),
  }
}

// Create transporter with explicit TLS configuration for port 587
// NOTE: For emails to avoid spam on Gmail:
// 1. Add SPF record: v=spf1 include:gmail.com ~all (in DNS)
// 2. Enable DKIM in Gmail: https://support.google.com/domains/answer/6147603
// 3. Configure DMARC: v=DMARC1; p=none; rua=mailto:dmarc@dhyanshivindia.in (in DNS)
// This ensures email authentication and improves inbox delivery
const getTransporter = () => {
  const smtpUrl = process.env.EMAIL_SERVER_SMTP || ''
  
  if (!smtpUrl) {
    throw new Error('EMAIL_SERVER_SMTP not configured')
  }

  // If using port 587, we need explicit TLS/STARTTLS configuration
  if (smtpUrl.includes(':587')) {
    const parsed = parseSmtpUrl(smtpUrl)
    if (parsed) {
      return nodemailer.createTransport({
        host: parsed.host,
        port: 587,
        secure: false, // false for port 587 (uses STARTTLS), true for port 465
        auth: {
          user: parsed.user,
          pass: parsed.pass,
        },
        tls: {
          rejectUnauthorized: false, // Allow self-signed certificates from cPanel
        },
      })
    }
  }
  
  return nodemailer.createTransport(smtpUrl)
}

let transporter: nodemailer.Transporter | null = null

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    if (!transporter) {
      transporter = getTransporter()
    }
    
    const from = process.env.EMAIL_FROM || 'noreply@dhyanshivindia.in'
    
    const result = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      // Critical headers for inbox delivery (not spam)
      headers: {
        'X-Mailer': 'DHYANSHIV INDIA',
        'X-Priority': '3', // Normal priority
        'Importance': 'normal',
        'Precedence': 'bulk', // Mark as transactional email
        'Return-Path': from,
        'Reply-To': 'support@dhyanshivindia.in',
        'List-Unsubscribe': '<mailto:support@dhyanshivindia.in?subject=unsubscribe>', // Not applicable but helps authentication
      },
      // Alternative text version for better spam scoring
      text: html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' '),
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
