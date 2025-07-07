import { z } from "zod"
import { jobSchema } from "./job"
import { quoteSchema } from "./quote"

export const accountSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  name: z.string().min(1, "Account name cannot be empty"),
  address: z.object({
    street: z.string().min(1, "Street cannot be empty"),
    city: z.string().min(1, "City cannot be empty"),
    state: z.string().min(1, "State cannot be empty"),
    zip: z.string().min(1, "Zip cannot be empty"),
  }),
})

export const accountDetailSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  account: accountSchema,
  jobs: z.array(jobSchema),
  quotes: z.array(quoteSchema),
})

export type Account = z.infer<typeof accountSchema>
