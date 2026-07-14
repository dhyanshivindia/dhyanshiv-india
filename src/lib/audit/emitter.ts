import type { AuditActor, AuditEventInput, AuditSink, NormalizedAuditEvent } from '@/lib/audit/types'

function normalizeAuditEvent(event: AuditEventInput, actor?: AuditActor): NormalizedAuditEvent {
  return {
    ...event,
    actorUserId: actor?.userId ?? null,
    actorRole: actor?.role ?? null,
    ipAddress: actor?.ipAddress ?? null,
    userAgent: actor?.userAgent ?? null,
  }
}

export class AuditEmitter {
  private readonly sinks = new Set<AuditSink>()

  registerSink(sink: AuditSink): () => void {
    this.sinks.add(sink)
    return () => this.sinks.delete(sink)
  }

  async emit(event: AuditEventInput, actor?: AuditActor): Promise<void> {
    const normalized = normalizeAuditEvent(event, actor)
    const sinks = Array.from(this.sinks)
    for (let i = 0; i < sinks.length; i += 1) {
      const sink = sinks[i]
      await sink(normalized)
    }
  }

  clearSinks(): void {
    this.sinks.clear()
  }
}

export const auditEmitter = new AuditEmitter()
