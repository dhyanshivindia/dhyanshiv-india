import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER_SMTP || '')

export async function sendEmail(to: string, subject: string, html: string) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  })
}
