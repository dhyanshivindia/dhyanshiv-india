export type AuditActor = {
  userId?: string | null
  role?: string | null
  ipAddress?: string | null
  userAgent?: string | null
}

export type AuditEventInput = {
  eventType: string
  entityType?: string | null
  entityId?: string | null
  previousValue?: unknown
  newValue?: unknown
  metadata?: unknown
}

export type NormalizedAuditEvent = AuditEventInput & {
  actorUserId?: string | null
  actorRole?: string | null
  ipAddress?: string | null
  userAgent?: string | null
}

export type AuditSink = (event: NormalizedAuditEvent) => Promise<void>
