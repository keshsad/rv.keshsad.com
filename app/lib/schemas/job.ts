import { z } from "zod"
import { userSchema } from "./user"
import { accountSchema } from "./account"
import { quoteSchema } from "./quote"

export const jobStatusSchema = z.enum(["measure", "fabricate", "install", "punch"])

export const jobSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  jobNumber: z.number(),
  name: z.string().min(1, "Job name cannot be empty"),
  accountName: z.string().min(1, "Account name cannot be empty"),
  status: jobStatusSchema,
  total: z.number(),
  date: z.date().optional(),
  address: z.object({
    street: z.string().min(1, "Street cannot be empty"),
    city: z.string().min(1, "City cannot be empty"),
    state: z.string().min(1, "State cannot be empty"),
    zip: z.string().min(1, "Zip cannot be empty"),
  }),
})

export const jobDetailSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  owner: userSchema,
  job: jobSchema,
  account: accountSchema,
  quotes: z.array(quoteSchema),
  primaryQuote: quoteSchema,
  assigned: z.array(userSchema),
  notes: z.string().optional(),
})

export type Job = z.infer<typeof jobSchema>       // createdAt and updatedAt are Date
export type JobInput = z.input<typeof jobSchema>  // createdAt and updatedAt are string
export type JobStatus = z.infer<typeof jobStatusSchema>
export type JobDetail = z.infer<typeof jobDetailSchema>
