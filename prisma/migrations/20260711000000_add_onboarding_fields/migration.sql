-- AlterTable
ALTER TABLE "User" ADD COLUMN "fullName" TEXT,
ADD COLUMN "dob" TIMESTAMP(3),
ADD COLUMN "phone" TEXT,
ADD COLUMN "aadhaarNumber" TEXT,
ADD COLUMN "panNumber" TEXT,
ADD COLUMN "documentsVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "profileComplete" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "EmailOTP" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailOTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailOTP_email_key" ON "EmailOTP"("email");
