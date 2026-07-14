import { Prisma } from '@prisma/client'

import { auditEmitter } from '@/lib/audit/emitter'
import type { AuditSink } from '@/lib/audit/types'
import { prisma } from '@/lib/prisma'

function toPrismaJson(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull | undefined {
  if (value === undefined) return undefined
  if (value === null) return Prisma.JsonNull

  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    Array.isArray(value) ||
    (typeof value === 'object' && value !== null)
  ) {
    return value as Prisma.InputJsonValue
  }

  return undefined
}

export function createPrismaAuditSink(): AuditSink {
  return async (event) => {
    await prisma.auditEvent.create({
      data: {
        actorUserId: event.actorUserId ?? null,
        actorRole: event.actorRole ?? null,
        eventType: event.eventType,
        entityType: event.entityType ?? null,
        entityId: event.entityId ?? null,
        previousValue: toPrismaJson(event.previousValue),
        newValue: toPrismaJson(event.newValue),
        metadata: toPrismaJson(event.metadata),
        ipAddress: event.ipAddress ?? null,
        userAgent: event.userAgent ?? null,
      },
    })
  }
}

let prismaSinkRegistered = false

export function registerPrismaAuditStore(): void {
  if (prismaSinkRegistered) return
  auditEmitter.registerSink(createPrismaAuditSink())
  prismaSinkRegistered = true
}
