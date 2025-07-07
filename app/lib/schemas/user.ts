import { z } from "zod"

export const userRoleSchema = z.enum(["admin", "management", "install", "sales", "view"])

export const userSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  userName: z.string().min(1, "User name cannot be empty"),
  displayName: z.string().optional(),
  email: z.string().email(),
  role: userRoleSchema,
  avatarUrl: z.string().url().optional(),
})

export type User = z.infer<typeof userSchema>
export type UserRole = z.infer<typeof userRoleSchema>
