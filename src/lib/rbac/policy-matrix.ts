import { RolePermissionMatrix } from '@/lib/rbac/types'

export const ROLE_PERMISSION_MATRIX: RolePermissionMatrix = {
  admin: [
    {
      resource: '*',
      actions: ['*'],
    },
  ],
  manager: [
    {
      resource: 'applications',
      actions: ['read', 'create', 'update', 'assign'],
    },
    {
      resource: 'tickets',
      actions: ['read', 'create', 'update', 'assign'],
    },
    {
      resource: 'services',
      actions: ['read', 'create', 'update'],
    },
    {
      resource: 'management',
      actions: ['read', 'manage'],
    },
    {
      resource: 'dashboard',
      actions: ['read'],
    },
    {
      resource: 'notifications',
      actions: ['read'],
    },
  ],
  agent: [
    {
      resource: 'profile',
      actions: ['readOwn', 'updateOwn'],
    },
    {
      resource: 'customers',
      actions: ['readOwn', 'createOwn', 'updateOwn'],
    },
    {
      resource: 'applications',
      actions: ['readOwn', 'createOwn', 'updateOwn'],
    },
    {
      resource: 'rewards',
      actions: ['readOwn'],
    },
    {
      resource: 'earnings',
      actions: ['readOwn'],
    },
    {
      resource: 'dashboard',
      actions: ['read'],
    },
    {
      resource: 'notifications',
      actions: ['read'],
    },
  ],
  user: [
    {
      resource: 'profile',
      actions: ['readOwn', 'updateOwn'],
    },
    {
      resource: 'applications',
      actions: ['readOwn', 'createOwn'],
    },
    {
      resource: 'documents',
      actions: ['readOwn', 'createOwn', 'deleteOwn'],
    },
    {
      resource: 'tickets',
      actions: ['readOwn', 'createOwn', 'updateOwn'],
    },
    {
      resource: 'payments',
      actions: ['readOwn', 'createOwn'],
    },
    {
      resource: 'dashboard',
      actions: ['read'],
    },
    {
      resource: 'notifications',
      actions: ['read'],
    },
  ],
} as const