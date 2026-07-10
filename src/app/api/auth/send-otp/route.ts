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
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
            .wrapper { background-color: #f9fafb; padding: 20px; }
            .container { max-width: 580px; margin: 0 auto; }
            .card { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }
            .logo-section { text-align: center; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: 600; color: #0891b2; }
            h1 { color: #1f2937; font-size: 26px; margin: 20px 0 10px 0; text-align: center; }
            .subtitle { color: #6b7280; font-size: 16px; margin-bottom: 30px; text-align: center; }
            .otp-section { text-align: center; margin: 35px 0; }
            .otp-box { background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); border-radius: 8px; padding: 25px; margin: 20px 0; display: inline-block; min-width: 200px; }
            .otp-code { font-size: 44px; font-weight: 700; color: white; letter-spacing: 6px; font-family: 'Courier New', monospace; line-height: 1.2; }
            .otp-validity { color: #059669; font-size: 14px; margin-top: 12px; font-weight: 500; }
            .security-notice { background: #ecfdf5; border-left: 4px solid #059669; padding: 15px; border-radius: 4px; margin: 25px 0; color: #065f46; font-size: 13px; line-height: 1.5; }
            .security-notice strong { display: block; margin-bottom: 8px; }
            .action-text { color: #6b7280; font-size: 14px; margin: 20px 0; line-height: 1.6; }
            .divider { height: 1px; background: #e5e7eb; margin: 25px 0; }
            .footer { color: #6b7280; font-size: 12px; text-align: center; padding-top: 20px; }
            .footer p { margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="card">
                <div class="logo-section">
                  <div class="logo">🔐 DHYANSHIV INDIA</div>
                </div>
                
                <h1>Verify Your Email Address</h1>
                <p class="subtitle">Your security code is ready</p>
                
                <div class="otp-section">
                  <p style="color: #6b7280; font-size: 15px; margin: 0 0 15px 0;">Enter this code to complete your verification:</p>
                  <div class="otp-box">
                    <div class="otp-code">${otp}</div>
                  </div>
                  <p class="otp-validity">✓ Code valid for 10 minutes</p>
                </div>
                
                <div class="security-notice">
                  <strong>🛡️ Security Notice</strong>
                  We will never ask for your code via call, SMS, or email chat. Never share this code with anyone.
                </div>
                
                <div class="action-text">
                  <p>Didn't request this code?</p>
                  <p>If you didn't initiate this verification, you can safely ignore this email. No action will be taken on your account.</p>
                </div>
                
                <div class="divider"></div>
                
                <div class="footer">
                  <p><strong>DHYANSHIV INDIA PRIVATE LIMITED</strong></p>
                  <p>Enterprise Compliance & Tech Services</p>
                  <p>© 2025 DHYANSHIV INDIA. All rights reserved.</p>
                  <p style="margin-top: 10px; color: #9ca3af;">This is an automated security message. Please do not reply.</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const subject = 'Verification Code: ' + otp
    
    await sendEmail(email, subject, emailHtml)

    return NextResponse.json({
      success: true,
      message: 'OTP sent to email',
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Send OTP error:', {
      error: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
    })
    return NextResponse.json(
      { 
        error: 'Failed to send OTP',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      }, 
      { status: 500 }
    )
  }
}
