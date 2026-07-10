const fetch = require('node-fetch');

async function testOnboarding() {
  const email = 'test-onboarding@example.com';
  const baseUrl = 'https://dhyanshivindia.in';

  try {
    console.log('=== DHYANSHIV INDIA ONBOARDING TEST ===\n');

    // Step 1: Send OTP
    console.log('1️⃣ Sending OTP to', email);
    const sendRes = await fetch(`${baseUrl}/api/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    if (!sendRes.ok) {
      throw new Error(`Send OTP failed: ${sendRes.status}`);
    }
    console.log('   ✓ OTP Sent\n');

    // Get OTP from database
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    const otpRecord = await prisma.emailOTP.findUnique({ where: { email } });
    if (!otpRecord) throw new Error('OTP not found in database');
    
    const otp = otpRecord.otp;
    console.log('2️⃣ OTP Code:', otp, '\n');

    // Step 2: Verify OTP
    console.log('3️⃣ Verifying OTP...');
    const verifyRes = await fetch(`${baseUrl}/api/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp })
    });
    
    if (!verifyRes.ok) {
      throw new Error(`OTP Verification failed: ${verifyRes.status}`);
    }
    console.log('   ✓ OTP Verified\n');

    // Step 3: Complete Onboarding
    console.log('4️⃣ Completing Onboarding...');
    const onboardRes = await fetch(`${baseUrl}/api/user/complete-onboarding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        fullName: 'Test User',
        dob: '2000-01-15',
        mobile: '9173011851',
        aadhaarNumber: '123456789012',
        panNumber: ''
      })
    });
    
    const onboardData = await onboardRes.json();
    if (!onboardRes.ok) {
      throw new Error(`Onboarding failed: ${onboardRes.status} - ${JSON.stringify(onboardData)}`);
    }
    console.log('   ✓ Onboarding Complete\n');

    // Step 4: Verify User Created
    console.log('5️⃣ Verifying User Created...');
    const user = await prisma.user.findUnique({
      where: { email },
      include: { subscription: true, quota: true }
    });
    
    if (user) {
      console.log('   ✓ User Created:', {
        id: user.id,
        name: user.fullName,
        email: user.email,
        profileComplete: user.profileComplete,
        emailVerified: user.emailVerified ? '✓ Yes' : '✗ No',
        subscription: user.subscription[0]?.tier || 'None',
        quota: user.quota[0]?.requestsLimit || 0
      });
    }

    await prisma.$disconnect();

    console.log('\n✅ ONBOARDING FLOW TEST PASSED!');

  } catch (error) {
    console.error('❌ Test Failed:', error.message);
    process.exit(1);
  }
}

testOnboarding();
