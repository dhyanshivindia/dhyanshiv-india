const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkOTP() {
  const record = await prisma.emailOTP.findUnique({
    where: { email: 'trivediyash6596@gmail.com' }
  });
  
  if (record) {
    console.log('Email:', record.email);
    console.log('OTP:', record.otp);
    console.log('Expires:', record.expires);
    console.log('Attempts:', record.attempts);
  } else {
    console.log('No OTP record found');
  }
  
  await prisma.$disconnect();
}

checkOTP();
