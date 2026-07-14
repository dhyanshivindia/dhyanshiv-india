import {
  APP_ROLES,
  AppRole,
  AuthorizationCheck,
  PermissionAction,
  PermissionDescriptor,
  PermissionResource,
  PermissionToken,
} from '@/lib/rbac/types'
import { ROLE_PERMISSION_MATRIX } from '@/lib/rbac/policy-matrix'

function toPermissionToken(resource: PermissionResource, action: PermissionAction): PermissionToken {
  return `${resource}:${action}`
}

function expandPermissionDescriptors(descriptors: readonly PermissionDescriptor[]): Set<string> {
  const permissions = new Set<string>()

  for (const descriptor of descriptors) {
    for (const action of descriptor.actions) {
      permissions.add(toPermissionToken(descriptor.resource, action))
    }
  }

  return permissions
}

export function isAppRole(value: string): value is AppRole {
  return APP_ROLES.includes(value as AppRole)
}

export function getRolePermissions(role: AppRole, extraPermissions?: readonly string[]): Set<string> {
  const permissions = expandPermissionDescriptors(ROLE_PERMISSION_MATRIX[role])

  if (extraPermissions) {
    for (const permission of extraPermissions) {
      permissions.add(permission)
    }
  }

  return permissions
}

export function can({ role, resource, action, extraPermissions }: AuthorizationCheck): boolean {
  const permissions = getRolePermissions(role, extraPermissions)

  return (
    permissions.has('*:*') ||
    permissions.has(toPermissionToken(resource, '*')) ||
    permissions.has(toPermissionToken('*', action)) ||
    permissions.has(toPermissionToken(resource, action))
  )
}

export function canAny(
  role: AppRole,
  checks: ReadonlyArray<Omit<AuthorizationCheck, 'role'>>,
  extraPermissions?: readonly string[]
): boolean {
  return checks.some((check) => can({ role, extraPermissions, ...check }))
}

export function canAll(
  role: AppRole,
  checks: ReadonlyArray<Omit<AuthorizationCheck, 'role'>>,
  extraPermissions?: readonly string[]
): boolean {
  return checks.every((check) => can({ role, extraPermissions, ...check }))
}

export function hasRole(role: AppRole, allowedRoles: readonly AppRole[]): boolean {
  return allowedRoles.includes(role)
}