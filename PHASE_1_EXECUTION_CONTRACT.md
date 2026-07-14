# PHASE_1_EXECUTION_CONTRACT

Status: Final pre-implementation contract
Scope: Phase 1, Milestone 1 only
Authority:
- PROJECT_MASTER_SPECIFICATION.md
- MASTER_DEVELOPMENT_PLAN.md
- FINAL_EXECUTION_AUTHORITY.md

Implementation repository:
- dhyanshiv-india

This document covers ONLY Milestone 1.
No future milestones are included here.

---
## 1. Objective

Prepare the database foundation for Phase 1 without implementing business logic, APIs, middleware, or frontend behavior.

Milestone 1 is limited to:
- RBAC and permission schema foundation
- security/session metadata schema extensions required by final Phase 1 policy
- audit event schema foundation
- migration artifact creation
- milestone documentation updates after successful validation

This milestone must remain additive and reversible.

---
## 2. Expected Result

At Milestone 1 completion:
- prisma/schema.prisma contains the Phase 1 database foundation only
- Migration A exists for RBAC and permission foundation
- Migration B exists for audit event core
- no production business logic is introduced
- no API behavior changes are introduced
- no frontend behavior changes are introduced
- Prisma validates successfully
- Prisma Client generates successfully
- TypeScript passes
- ESLint passes
- build passes
- MIGRATION_HISTORY.txt is updated with the Milestone 1 entry
- PROJECT_MEMORY.md is updated with the Milestone 1 entry

---
## 3. Exact Files To Modify

1. prisma/schema.prisma
2. MIGRATION_HISTORY.txt
3. PROJECT_MEMORY.md

---
## 4. Exact Files To Create

1. prisma/migrations/<timestamp>_migration_a_rbac_permission_foundation/migration.sql
2. prisma/migrations/<timestamp>_migration_b_audit_event_core/migration.sql

No other file creation is permitted in this milestone.

---
## 5. Exact Order In Which Files Will Be Edited

1. prisma/schema.prisma
2. prisma/migrations/<timestamp>_migration_a_rbac_permission_foundation/migration.sql
3. prisma/schema.prisma
4. prisma/migrations/<timestamp>_migration_b_audit_event_core/migration.sql
5. MIGRATION_HISTORY.txt
6. PROJECT_MEMORY.md

Notes:
- prisma/schema.prisma is intentionally edited twice.
- The first schema edit prepares Migration A only.
- The second schema edit prepares Migration B only.
- Documentation files are updated only after all validations pass.

---
## 6. Exact Order In Which Migrations Will Be Created

1. Migration A
- Name: migration_a_rbac_permission_foundation
- Purpose: role and permission foundation plus user/session security metadata required for Phase 1

2. Migration B
- Name: migration_b_audit_event_core
- Purpose: immutable audit event foundation

Rules:
- Migration A must be created before any audit schema work begins.
- Migration B must not be created until Migration A has validated successfully.
- No combined migration is allowed.
- No transactional/business-domain tables are allowed in this milestone.

---
## 7. Exact Implementation Sequence

### Step 0 - Baseline preflight
Purpose:
- Confirm the repository is in a safe state before any schema editing starts.

Dependencies:
- Local environment configured
- DATABASE_URL present
- node_modules installed

Possible Risks:
- Starting from an unstable baseline causes false schema failures later.
- Dirty working tree can hide unrelated changes.

Action:
1. Open prisma/schema.prisma
2. Open prisma/migrations/
3. Open package.json
4. Confirm existing migration folders only contain historical migration.sql files
5. Confirm validation commands to be used in this milestone

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- do not edit any file
- resolve baseline failure before Milestone 1 begins

Rollback for the step:
- No rollback required because no files are changed

STOP POINT 1
- Wait for review of baseline status
- No schema changes until approval

---
### Step 1 - Edit prisma/schema.prisma for Migration A scope only
Purpose:
- Add only the schema structures needed for RBAC foundation and Phase 1 security/session metadata.

Dependencies:
- Step 0 complete
- Existing prisma/schema.prisma opens cleanly
- Migration A scope is finalized before editing begins

Allowed schema scope in this step:
- role/permission foundation tables
- role-permission linkage tables
- user-role linkage extension if required
- trusted-device and session/security metadata required by final Phase 1 policy

Forbidden schema scope in this step:
- audit event tables
- application tables
- service lifecycle changes
- payments, tickets, notifications, documents, reports, AI, or public-site schema

Possible Risks:
- Accidentally mixing Migration B content into Migration A
- Breaking existing relations in User, Session, or Account models
- Introducing non-additive changes

Action:
1. Open prisma/schema.prisma
2. Add Migration A schema changes only
3. Save prisma/schema.prisma

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- revert prisma/schema.prisma to pre-Step 1 state
- do not create Migration A

Rollback for the step:
- Revert prisma/schema.prisma only
- No migration files should exist yet

STOP POINT 2
- Wait for review of schema diff for Migration A scope only
- No migration creation without approval

---
### Step 2 - Create Migration A only
Purpose:
- Materialize the RBAC and security/session schema changes as an isolated migration artifact.

Dependencies:
- Step 1 complete and validated
- prisma/schema.prisma contains only Migration A changes beyond baseline

Possible Risks:
- Prisma captures unintended schema changes into Migration A
- Migration naming drift breaks migration history consistency

Action:
1. Create Migration A with Prisma create-only workflow
2. Confirm the created file path is:
   - prisma/migrations/<timestamp>_migration_a_rbac_permission_foundation/migration.sql
3. Open the generated migration.sql
4. Confirm it contains only Migration A scope
5. Save if no manual correction is needed

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- remove the new Migration A directory
- revert prisma/schema.prisma to pre-Step 1 state if the failure indicates incorrect schema scope

Rollback for the step:
- Delete prisma/migrations/<timestamp>_migration_a_rbac_permission_foundation/
- Revert prisma/schema.prisma to its baseline version if Migration A must be abandoned entirely

STOP POINT 3
- Wait for review of Migration A contents
- No audit schema work until Migration A is accepted

---
### Step 3 - Edit prisma/schema.prisma for Migration B scope only
Purpose:
- Add only the audit event schema needed for immutable audit foundation.

Dependencies:
- Step 2 complete and accepted
- prisma/schema.prisma already includes Migration A schema changes

Allowed schema scope in this step:
- audit_event model and related indexes
- audit metadata structures required for immutable append-only event storage

Forbidden schema scope in this step:
- any additional RBAC changes not already captured in Migration A
- any application, service, payment, ticket, document, notification, report, or AI schema

Possible Risks:
- Mixing new RBAC changes into audit migration
- Creating audit relations that depend on unimplemented future domains

Action:
1. Open prisma/schema.prisma
2. Add Migration B schema changes only
3. Save prisma/schema.prisma

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- revert prisma/schema.prisma to the Step 2 accepted state
- do not create Migration B

Rollback for the step:
- Revert prisma/schema.prisma to the state that includes Migration A only
- Keep Migration A untouched

STOP POINT 4
- Wait for review of audit schema diff only
- No Migration B creation without approval

---
### Step 4 - Create Migration B only
Purpose:
- Materialize the audit event schema as its own migration artifact.

Dependencies:
- Step 3 complete and validated
- prisma/schema.prisma contains Migration A plus Migration B schema, and nothing beyond that scope

Possible Risks:
- Audit migration accidentally includes unrelated schema drift
- Migration sequence becomes non-deterministic if Migration A is altered afterward

Action:
1. Create Migration B with Prisma create-only workflow
2. Confirm the created file path is:
   - prisma/migrations/<timestamp>_migration_b_audit_event_core/migration.sql
3. Open the generated migration.sql
4. Confirm it contains only audit core changes
5. Save if no manual correction is needed

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- remove the new Migration B directory
- revert prisma/schema.prisma to the Step 2 accepted state if necessary

Rollback for the step:
- Delete prisma/migrations/<timestamp>_migration_b_audit_event_core/
- Revert prisma/schema.prisma to the state that contains Migration A only if Migration B must be abandoned

STOP POINT 5
- Wait for review of Migration B contents
- No documentation updates until Migration B is accepted

---
### Step 5 - Update MIGRATION_HISTORY.txt
Purpose:
- Record Milestone 1 schema and migration activity in the project migration ledger.

Dependencies:
- Step 4 complete and accepted
- Migration A and Migration B files finalized

Possible Risks:
- Recording incorrect migration names or sequence
- Documentation drift from actual generated files

Action:
1. Open MIGRATION_HISTORY.txt
2. Append Milestone 1 entry only
3. Save MIGRATION_HISTORY.txt

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- revert MIGRATION_HISTORY.txt
- keep schema and migration files unchanged

Rollback for the step:
- Revert MIGRATION_HISTORY.txt only

STOP POINT 6
- Wait for review of migration ledger entry
- No PROJECT_MEMORY update without approval

---
### Step 6 - Update PROJECT_MEMORY.md
Purpose:
- Record Milestone 1 completion summary, validation results, and next approved boundary.

Dependencies:
- Step 5 complete and accepted

Possible Risks:
- Writing milestone notes that do not match the final migration state
- Logging future scope that belongs to later milestones

Action:
1. Open PROJECT_MEMORY.md
2. Append Milestone 1 record only
3. Save PROJECT_MEMORY.md

Validation after the step:
- Compile: npm run build
- Lint: npm run lint
- TypeScript: npx tsc --noEmit
- Prisma Validate: npx prisma validate
- Prisma Generate: npx prisma generate
- Build: npm run build

If validation fails:
- STOP
- revert PROJECT_MEMORY.md
- keep all schema and migration files unchanged

Rollback for the step:
- Revert PROJECT_MEMORY.md only

STOP POINT 7
- Wait for final Milestone 1 review
- No Milestone 2 work without explicit approval

---
## 8. Milestone 1 Exact File Edit Contract

### Files modified in this milestone
- prisma/schema.prisma
- MIGRATION_HISTORY.txt
- PROJECT_MEMORY.md

### Files created in this milestone
- prisma/migrations/<timestamp>_migration_a_rbac_permission_foundation/migration.sql
- prisma/migrations/<timestamp>_migration_b_audit_event_core/migration.sql

### Files explicitly not touched in this milestone
- src/lib/auth.ts
- src/lib/password.ts
- src/lib/mail.ts
- middleware.ts
- all src/app/api/* routes
- all src/app/* frontend pages
- all payment, service, subscription, onboarding, dashboard, and public website files

---
## 9. Exact Validation Command Set

These commands are the required validation set after every logical step:

1. Prisma Validate
- npx prisma validate

2. Prisma Generate
- npx prisma generate

3. TypeScript
- npx tsc --noEmit

4. Lint
- npm run lint

5. Compile
- npm run build

6. Build
- npm run build

Rules:
- If Prisma Validate fails: STOP immediately
- If Prisma Generate fails: STOP immediately
- If TypeScript fails: STOP immediately
- If Lint fails: STOP immediately
- If Compile/Build fails: STOP immediately
- No next step is allowed until the current step passes the full validation set

---
## 10. Independent Rollback Guarantee

Milestone 1 must be independently reversible.

Rollback boundary by artifact:
- Step 1 rollback affects only prisma/schema.prisma
- Step 2 rollback affects Migration A directory and, if required, prisma/schema.prisma back to baseline
- Step 3 rollback affects only prisma/schema.prisma back to Migration A accepted state
- Step 4 rollback affects Migration B directory and, if required, prisma/schema.prisma back to Migration A accepted state
- Step 5 rollback affects only MIGRATION_HISTORY.txt
- Step 6 rollback affects only PROJECT_MEMORY.md

No rollback in this milestone may touch:
- business logic files
- API files
- frontend files
- deployment config

---
## 11. Pre-Implementation Checklist

Every item below must be YES before Milestone 1 coding begins.

- Schema backup completed: YES
- Current migrations backed up: YES
- Git working tree reviewed and acceptable for milestone work: YES
- Environment variables verified: YES
- DATABASE_URL verified: YES
- Prisma baseline validate passing: YES
- Prisma baseline generate passing: YES
- TypeScript baseline passing: YES
- ESLint baseline passing: YES
- Build baseline passing: YES
- Specification version locked: YES
- MASTER_DEVELOPMENT_PLAN locked: YES
- FINAL_EXECUTION_AUTHORITY locked: YES
- Milestone scope limited to schema plus migration artifacts only: YES
- No API code scheduled in this milestone: YES
- No frontend code scheduled in this milestone: YES
- No business logic scheduled in this milestone: YES

If any item is not YES:
- STOP
- do not begin Milestone 1

---
## 12. Final Execution Rule

After this document is approved,
there should be NO MORE planning documents.
Development will begin.
