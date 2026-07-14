export const APP_ROLES = ['admin', 'manager', 'agent', 'user'] as const

export type AppRole = (typeof APP_ROLES)[number]

export const RBAC_RESOURCES = [
  'applications',
  'tickets',
  'services',
  'management',
  'profile',
  'customers',
  'rewards',
  'earnings',
  'documents',
  'payments',
  'dashboard',
  'settings',
  'users',
  'agents',
  'audit',
  'reports',
  'notifications',
] as const

export type RbacResource = (typeof RBAC_RESOURCES)[number]

export const RBAC_ACTIONS = [
  'read',
  'create',
  'update',
  'delete',
  'approve',
  'assign',
  'manage',
  'readOwn',
  'createOwn',
  'updateOwn',
  'deleteOwn',
] as const

export type RbacAction = (typeof RBAC_ACTIONS)[number]

export type PermissionResource = RbacResource | '*'
export type PermissionAction = RbacAction | '*'
export type PermissionToken = `${PermissionResource}:${PermissionAction}`

export type PermissionDescriptor = {
  resource: PermissionResource
  actions: readonly PermissionAction[]
}

export type RolePermissionMatrix = Record<AppRole, readonly PermissionDescriptor[]>

export type AuthorizationCheck = {
  role: AppRole
  resource: PermissionResource
  action: PermissionAction
  extraPermissions?: readonly string[]
}