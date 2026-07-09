import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/mail'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    // Check if OTP already exists
    const existingOTP = await prisma.emailOTP.findUnique({
      where: { email },
    })

    if (existingOTP) {
      await prisma.emailOTP.update({
        where: { email },
        data: {
          otp,
          expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
          attempts: 0,
        },
      })
    } else {
      await prisma.emailOTP.create({
        data: {
          email,
          otp,
          expires: new Date(Date.now() + 10 * 60 * 1000),
        },
      })
    }

    // Send email with OTP
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px; }
            .card { background: white; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); }
            .logo { font-size: 24px; font-weight: bold; color: #0891b2; margin-bottom: 20px; }
            h1 { color: #1f2937; font-size: 28px; margin: 20px 0; }
            .subtitle { color: #6b7280; font-size: 16px; margin-bottom: 30px; }
            .otp-box { background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); border-radius: 8px; padding: 20px; margin: 30px 0; }
            .otp-code { font-size: 48px; font-weight: bold; color: white; letter-spacing: 8px; font-family: 'Courier New', monospace; }
            .otp-validity { color: #9ca3af; font-size: 14px; margin-top: 15px; }
            .footer { color: #6b7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
            .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin: 20px 0; color: #92400e; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="logo">🔐 DHYANSHIV INDIA</div>
              <h1>Verify Your Email</h1>
              <p class="subtitle">Your One-Time Password (OTP) is:</p>
              
              <div class="otp-box">
                <div class="otp-code">${otp}</div>
              </div>
              
              <p class="otp-validity">✓ Valid for 10 minutes</p>
              
              <div class="warning">
                <strong>⚠️ Never share this code!</strong><br>
                DHYANSHIV INDIA will never ask for your OTP via email, phone, or message.
              </div>
              
              <p style="color: #6b7280; margin-top: 25px;">
                Didn't request this code? You can ignore this email.
              </p>
              
              <div class="footer">
                <p>© 2025 DHYANSHIV INDIA PRIVATE LIMITED. All rights reserved.</p>
                <p>This is an automated message, please do not reply.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    await sendEmail(email, 'Your DHYANSHIV INDIA Verification Code: ' + otp, emailHtml)

    return NextResponse.json({
      success: true,
      message: 'OTP sent to email',
    })
  } catch (error) {
    console.error('Send OTP error:', error)
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 })
  }
}
