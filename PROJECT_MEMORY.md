# PROJECT MEMORY

## Last Updated
- Date: 2026-07-14

## Final Phase 1 State
- Phase 1 is complete and closed out.
- Approved technical debt carried forward to Phase 2 only:
  - Next.js framework advisories
  - PostCSS advisory bundled with Next.js
  - uuid transitive dependency advisory
  - next-auth / @next-auth/prisma-adapter transitive advisories
  - nodemailer advisories with operational mitigations
- Migration state is now consistent and production-ready after safe baseline resolution with `prisma migrate resolve`; no database reset was performed.
- Final validation pipeline completed successfully for the closeout documents:
  - Prisma validate
  - Prisma generate
  - TypeScript
  - ESLint
  - Production build
- No application code changes were required for the closeout docs.

## Verification Snapshot (Phase 1 Milestone 9)
- Milestone completed: dashboard and settings security integration only.
- Removed admin/agent dashboard client-trust localStorage authority and switched to session-authoritative handling.
- Added settings security controls that consume existing v1 auth APIs for logout-all and trusted-device list/revoke.
- No database schema, migration, or backend API changes were made.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 9: dashboard and settings security integration.
- Completed in this task:
  - Updated `src/app/admin/dashboard/page.tsx`.
  - Updated `src/app/agent/dashboard/page.tsx`.
  - Updated `src/app/settings/page.tsx`.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 8)
- Milestone completed: frontend login integration only.
- Connected admin, agent, and manager sign-in surfaces to centralized authentication APIs from Milestone 7.
- Added manager sign-in page and updated user sign-in surface navigation/callback handling.
- Preserved existing route compatibility and avoided database/schema/migration changes.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 8: frontend login integration.
- Completed in this task:
  - Updated `src/app/signin/page.tsx`.
  - Updated `src/app/admin/signin/page.tsx`.
  - Updated `src/app/agent/signin/page.tsx`.
  - Added `src/app/manager/signin/page.tsx`.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 7)
- Milestone completed: v1 authentication API layer only.
- Added versioned auth endpoints for privileged login, email OTP challenge, TOTP verification, session logout-all, and trusted-device management.
- Converted legacy auth endpoints into thin compatibility wrappers while preserving existing route contracts.
- No frontend pages, dashboard pages, middleware files, or settings pages were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 7: v1 authentication API layer.
- Completed in this task:
  - Added v1 auth route files under `src/app/api/v1/auth/*` for login/challenge/session/trusted-device APIs.
  - Converted legacy auth routes (`admin-signin`, `agent-signin`, `send-otp`, `verify-otp`) to thin wrappers.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 6)
- Milestone completed: middleware integration only.
- Wired middleware to centralized NextAuth token checks with RBAC role validation and explicit public-route exemptions.
- Preserved existing role-based redirect behavior for admin, agent, and dashboard protected surfaces.
- No API routes, frontend pages, or database schema files were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 6: middleware integration.
- Completed in this task:
  - Updated `middleware.ts` to enforce centralized auth/RBAC checks with safe exemptions.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 5)
- Milestone completed: audit subsystem only.
- Added reusable audit types, event emitter, and Prisma-backed store sink.
- No API routes, middleware, frontend pages, or database schema files were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 5: audit subsystem foundation.
- Completed in this task:
  - Added `src/lib/audit/types.ts`.
  - Added `src/lib/audit/emitter.ts`.
  - Added `src/lib/audit/store.ts`.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 4)
- Milestone completed: security utilities only.
- Added reusable utilities for rate limiting, TOTP, trusted-device token handling, CAPTCHA verification, and disposable-email screening.
- No API routes, middleware, frontend pages, or database schema files were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 4: security utilities foundation.
- Completed in this task:
  - Added `src/lib/security/rate-limit.ts`.
  - Added `src/lib/security/totp.ts`.
  - Added `src/lib/security/trusted-device.ts`.
  - Added `src/lib/security/captcha.ts`.
  - Added `src/lib/security/disposable-email.ts`.
  - Completed required milestone validation successfully.

## Verification Snapshot (Phase 1 Milestone 3)
- Milestone completed: RBAC subsystem only.
- Added reusable RBAC typing, default role-permission matrix, and evaluation helpers.
- No API routes, middleware, frontend pages, or database schema files were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 3: RBAC subsystem foundation.
- Completed in this task:
  - Added `src/lib/rbac/types.ts` for role/resource/action contracts.
  - Added `src/lib/rbac/policy-matrix.ts` for default spec-aligned role permissions.
  - Added `src/lib/rbac/evaluator.ts` for reusable permission checks.
  - Completed full validation pipeline successfully.

## Verification Snapshot (Phase 1 Milestone 2)
- Milestone completed: authentication consolidation only.
- Centralized backend auth now normalizes canonical user identity and role shape through NextAuth callbacks.
- Session payload now consistently carries `id`, `email`, `role`, and legacy `admin` compatibility for existing consumers.
- Password verification now supports both the project's `hash:salt` format and legacy bcrypt hashes in one place.
- No Prisma schema, migration, middleware, frontend, or business logic files were changed in this milestone.
- Validation pipeline passed after milestone completion:
  - Prisma validate
  - Prisma generate
  - TypeScript
  - ESLint
  - Production build

## Last Completed Phase
- Phase 1 Milestone 2: backend authentication consolidation.
- Completed in this task:
  - Normalized database-backed role and identity resolution in `src/lib/auth.ts`.
  - Added unified stored-password verification in `src/lib/password.ts`.
  - Preserved existing public auth route surface and backward-compatible session semantics.
  - Completed full validation pipeline successfully.

## Verification Snapshot (Phase 1 Milestone 1)
- Milestone completed: database schema foundation only.
- Added schema support for RBAC roles, permissions, role assignments, trusted devices, session metadata, and immutable audit events.
- No API, middleware, frontend, or business logic files were changed.
- Validation pipeline passed after milestone completion:
  - Prisma validate
  - Prisma generate
  - TypeScript
  - ESLint
  - Production build
- Reproducibility correction completed:
  - Prisma CLI database access now targets the Supabase session-mode pooler on port 5432 for IPv4-safe migrations and introspection.
  - Historical Prisma migration files were rebaselined to match the committed pre-Milestone 1 schema state.
  - Prisma migration history metadata was restored with `migration_lock.toml`.
  - Existing shared Supabase schema was safely baselined with Prisma migrate resolve for pre-Milestone 1 history.

## Last Completed Phase
- Phase 1 Milestone 1: schema foundation prepared for RBAC/security-session metadata and audit events.
- Completed in this task:
  - Extended `prisma/schema.prisma` with Role, Permission, RolePermission, UserRole, TrustedDevice, and AuditEvent models.
  - Extended `User` and `Session` schema to support role assignments, trusted devices, and session lifecycle metadata.
  - Created Migration A: `prisma/migrations/20260713000000_migration_a_rbac_permission_foundation/migration.sql`.
  - Created Migration B: `prisma/migrations/20260713000001_migration_b_audit_event_core/migration.sql`.
  - Corrected historical migration baseline files so Prisma migration history matches the current schema exactly.
  - Removed tracked generated build artifacts from version control scope and extended ignore coverage for `tsconfig.tsbuildinfo`.
  - Completed full validation pipeline successfully.

## Verification Snapshot (Post Phase A)
- Full manual+automated verification executed before Phase B start.
- Route integrity and CTA navigation checks passed for newly created/modified pages (`/why-trust-us`, `/get-connected`, `/settings`, dashboard CTA links).
- Redirect checks passed for unauthenticated dashboard access:
  - `/admin/dashboard` -> `/admin/signin`
  - `/agent/dashboard` -> `/agent/signin`
  - `/dashboard` -> `/signin?callbackUrl=/dashboard`
- Build and static checks pass (`tsc`, `lint`, `build`).
- Blockers found:
  - Forgot-password end-to-end verification blocked by live database connectivity outage (`PrismaClientInitializationError` to Supabase host).
  - Dark mode toggle interaction did not apply theme class during browser verification; requires dedicated fix/investigation before marking as fully verified.

## Last Completed Phase
- Migration phase status: Continued visual refactor from existing implementation (post major shadcn-style rollout).
- Completed in this task:
  - Phase A route integrity: added missing pages for `/why-trust-us`, `/get-connected`, and `/settings`.
  - Phase A flow completion: implemented end-to-end reset password flow (`forgot-password` -> token validation -> password update).
  - Dead CTA cleanup: converted admin/agent dashboard action buttons to valid links.
  - Build resilience: changed `/api/services` to dynamic execution to avoid build-time DB prerender failures.
  - Validation pipeline executed: TypeScript check, ESLint, production build.

## Files Modified
- src/lib/rbac/evaluator.ts
- src/lib/rbac/policy-matrix.ts
- src/lib/rbac/types.ts
- src/lib/auth.ts
- src/lib/password.ts
- PROJECT_MEMORY.md
- prisma/schema.prisma
- MIGRATION_HISTORY.txt
- PROJECT_MEMORY.md
- src/app/admin/dashboard/page.tsx
- src/app/agent/dashboard/page.tsx
- src/app/api/auth/forgot-password/route.ts
- src/app/api/auth/reset-password/route.ts
- src/app/api/services/route.ts
- src/app/forgot-password/page.tsx
- src/app/get-connected/page.tsx
- src/app/reset-password/page.tsx
- src/app/settings/page.tsx
- src/app/why-trust-us/page.tsx

## Components Created
- src/lib/rbac/evaluator.ts
- src/lib/rbac/policy-matrix.ts
- src/lib/rbac/types.ts
- prisma/migrations/20260713000000_migration_a_rbac_permission_foundation/migration.sql
- prisma/migrations/20260713000001_migration_b_audit_event_core/migration.sql
- src/app/get-connected/page.tsx
- src/app/why-trust-us/page.tsx
- src/app/settings/page.tsx
- src/app/reset-password/page.tsx

## Pending Tasks
- Phase 1 is closed; do not start Phase 2 until explicitly approved.
- Existing non-blocking metadata warnings remain in production build output.
- Remaining runtime advisories are accepted as Phase 2 technical debt per user approval.

## Important Decisions
- RBAC implementation was kept library-only in this milestone so existing route behavior remains unchanged until a later integration milestone.
- Auth consolidation was kept backend-only in this milestone to avoid crossing into the later API-wrapper and frontend integration milestones.
- Existing dashboard/admin compatibility was preserved by continuing to expose a legacy `admin` session flag alongside normalized role data.
- Milestone 1 stayed within schema and migration scope only.
- Fresh developer guidance now uses Supabase session-mode pooler (5432) for Prisma CLI operations on IPv4-only networks.
- Runtime/app guidance now uses Supabase transaction pooler (6543) in env examples.
- Preserved existing folder structure and route architecture; only filled missing routes/flows.
- Reused existing `VerificationToken` and password hash format (`hash:salt`) for reset implementation.
- Kept reset-link disclosure dev-only (`debugResetUrl`) to avoid production leakage.
- Stabilized build behavior by forcing `/api/services` to runtime rendering.

## Validation Summary
- Prisma validate: pass (`npx prisma validate`)
- Prisma generate: pass (`npx prisma generate`)
- TypeScript: pass (`npx tsc --noEmit`)
- ESLint: pass (`npm run lint`)
- Production build: pass (`npm run build`) with non-fatal metadata warnings.

## Next Recommended Step
1. Review and approve Milestone 3 outputs.
2. If approved, begin the next milestone only.
