# Dhyanshiv India - Deployment Guide

## Overview

Your Next.js application is **production-ready** and configured for Vercel deployment.

**Current State:**
- ✅ All 5 phases complete
- ✅ Production build successful
- ✅ 23+ pages compiled
- ✅ Vercel configuration ready

## What's Deployed

### Marketing Pages (12+)
- Homepage with hero, services grid, CTA
- About, Portfolio, Pricing, Contact
- Privacy Policy, Terms of Service, Refund Policy, Copyright
- Sign In page

### Services (6 Pages)
- Compliance Automation
- Corporate Tech Delivery
- Automated Payments
- Security & Trust Ops
- Workflow Automation
- Support Service Ops
- *Dynamic routing with service details*

### Blog System
- Blog list with post filtering & tags
- 2 sample posts (Compliance Automation, Corporate Tech)
- MDX support for rich content
- *Fully extensible - add new posts to `src/blog/posts/*.mdx`*

### User Dashboard (Protected)
- Dashboard overview with stats & activity
- My Orders - table of active services
- Admin Analytics - (admin-only with role-based access)
- Auth guard redirects unauthenticated to Sign In

### SEO Enhancements
- `sitemap.xml` - Auto-generated from all routes
- `robots.txt` - Search engine rules configured
- JSON-LD Schema - Organization markup
- Meta tags on all pages
- OG images configured

## Deployment Steps

### 1. Prepare Git Repository

```bash
cd "d:\3 ULTRA\dhyanshiv-india"
git config user.name "Your Name"
git config user.email "your.email@dhyanshivindia.in"
git add .
git commit -m "Production build: Phases 1-5 complete - Full-stack Next.js app"
git push origin main
```

### 2. Create Vercel Project

1. Sign in to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository (`dhyanshiv-india`)
4. Vercel will auto-detect:
   - Framework: Next.js 14
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

*First deployment takes ~2-3 minutes*

### 3. Configure Environment Variables

In your Vercel Project Dashboard:
- Go to **Settings** → **Environment Variables**
- Add all variables from `.env.example`

**Critical Variables:**

```env
# NextAuth Configuration
NEXTAUTH_URL=https://dhyanshivindia.vercel.app
NEXTAUTH_SECRET=<generate-with-openssl>

# Database (Supabase)
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# OAuth (Google)
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Payments (Razorpay)
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...

# Email
EMAIL_SERVER_SMTP=smtp://mailbox%40dhyanshivindia.in:<SMTP_PASSWORD>@smtp.stackmail.com:587
EMAIL_FROM=connect@dhyanshivindia.in
ADMIN_EMAIL=dhyanshivindia@gmail.com
```

### 4. Link Custom Domain

1. In Vercel → **Domains**
2. Enter: `dhyanshivindia.in`
3. Follow Vercel's DNS instructions for your registrar
4. Update `NEXTAUTH_URL` to `https://dhyanshivindia.in`

### 5. Test Production

```bash
# Local production build test
npm run build
npm run start

# Visit: http://localhost:3000
```

## Environment Variable Generation

### NEXTAUTH_SECRET
Generate a secure 32-byte random string:

**PowerShell:**
```powershell
[System.Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
```

**Terminal:**
```bash
openssl rand -base64 32
```

## Database Setup (Supabase)

1. Sign up at [supabase.com](https://supabase.com)
2. Create new project
3. Go to Project Settings → API
4. Copy:
   - `SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

5. Copy connection string → `DATABASE_URL`

## NextAuth Setup (Google OAuth)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "Dhyanshiv India"
3. Enable OAuth 2.0 consent screen
4. Create OAuth 2.0 Credentials (Web Application)
5. Add Authorized Redirect URI:
   - `https://dhyanshivindia.vercel.app/api/auth/callback/google`
6. Copy Client ID & Secret

## Razorpay Setup

1. Sign up at [razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys
3. Copy Key ID and Key Secret
4. Set Webhook URL in Razorpay Dashboard:
   - `https://dhyanshivindia.in/api/webhooks/razorpay`

## Post-Deployment

### Add Sample Blog Posts
Create `.mdx` files in `src/blog/posts/`:
```
src/blog/posts/
  ├── automating-compliance.mdx
  ├── corporate-tech-delivery.mdx
  └── [your-new-posts].mdx
```

### Add Your Logo
Place in `public/logo.png` (160x50px recommended)

### Update Footer Links
Edit `src/components/site-footer.tsx` with your actual links

### Configure Admin Users
In your database, set `admin: true` for admin dashboard access

## Monitoring & Analytics

- **Vercel Analytics**: Automatic real user monitoring
- **Vercel Speed Insights**: Core Web Vitals tracking
- **Log Streaming**: Real-time logs via Vercel CLI

```bash
npm i -g vercel
vercel logs
```

## Continuous Deployment

Every push to `main` triggers automatic deployment:
1. GitHub push → Vercel receives webhook
2. Vercel runs `npm run build`
3. Tests build (takes ~2-3 min)
4. Deploys to production
5. Automatic DNS update (if using Vercel Domains)

## Rollback

If something breaks:
1. Go to Vercel → **Deployments**
2. Find previous working deployment
3. Click **Promote to Production**
4. Instant rollback!

## Support

- **Documentation**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **NextAuth Docs**: https://next-auth.js.org

---

**Next Steps:**
1. Push code to GitHub
2. Deploy to Vercel
3. Configure environment variables
4. Test at https://dhyanshivindia.vercel.app
5. Point domain to Vercel
6. Add sample data/posts
7. Monitor performance
