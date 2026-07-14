# Release Checklist

## Environment Variables
- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `SECONDARY_ADMIN_EMAIL`
- `SECONDARY_ADMIN_PASSWORD_HASH`
- `EMAIL_SERVER_SMTP`
- `EMAIL_FROM`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `CAPTCHA_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

## Database Migration Steps
- Confirm the target database is the intended production instance.
- Run `npx prisma migrate status` and verify the schema is up to date.
- If migration history is missing on an existing production database, reconcile history non-destructively with `prisma migrate resolve` using the committed migration set.
- Do not reset the database.
- Do not drop or recreate existing production data.

## Build Commands
- `npx prisma validate`
- `npx prisma generate`
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Deployment Steps
- Install production dependencies.
- Apply non-destructive Prisma migration reconciliation if needed.
- Build the application.
- Deploy the built artifact to the production host.
- Start or restart the production process.
- Confirm environment variables are loaded in the production runtime.

## Post-Deployment Verification Steps
- Visit the homepage and sign-in pages.
- Confirm unauthenticated access to protected dashboards redirects to sign-in.
- Confirm authenticated admin, agent, and manager sessions load correctly.
- Confirm settings and trusted-device actions respond successfully.
- Confirm logout-all and OTP/TOTP flows behave as expected.
- Check application logs for runtime errors after the first production traffic.