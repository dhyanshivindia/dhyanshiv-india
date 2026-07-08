# BlackboxAI UI/UX Implementation Plan (Luxury-Futuristic)

## Goal
Implement the requested live, premium luxury-futuristic redesign (buttons visible, hotline badge, 12-col Bento grid hero, cinematic glass/shadows, refined header/footer) with **no backend/logic changes**.

## Files to Update
1. `src/app/layout.tsx` (typography variables via `next/font/google`, keep existing logic)
2. `src/app/globals.css` (vignette/lens/glass/depth utility classes)
3. `src/components/site-header.tsx` (premium framing + link styling; ensure Sign In/Out contrast)
4. `src/components/site-footer.tsx` (premium contrast + subtle separators)
5. `src/app/page.tsx` (12-column Bento grid refactor + hotline badge + CTA reassurance line + micro-hover tilt)

## Safety Constraints
- Do not touch API routes, Supabase, Prisma, NextAuth logic, or context behavior.
- Only Tailwind classes/structure/wrappers/typography/global CSS.

## Execution Steps
1. Edit `globals.css` first to introduce reusable glass/depth/lens classes.
2. Update header/footer to use those classes and fix CTA/button contrast.
3. Refactor `src/app/page.tsx` hero into Bento grid:
   - headline plaque
   - hotline badge module
   - contact plaque with glowing CTA
   - trust badges as floating medal-like plaques
4. Run `npm run build` to confirm compilation.
5. Immediately deploy `vercel --prod --force`.
6. Verify with server-side `fetch`:
   - `GET /`
   - `GET /api/services`

## Acceptance Criteria
- Buttons visibly contrast on production.
- Home hero layout uses Bento grid.
- No build/type errors.
- `/api/services` remains 200.

