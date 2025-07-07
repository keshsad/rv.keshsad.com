import { z } from "zod"
import { accountSchema } from "./account"
import { jobSchema } from "./job"
import { inventoryItemSchema } from "./inventory"
import { userSchema } from "./user"

export const quoteStatusSchema = z.enum(["new", "draft", "sent", "approved", "rejected"])

export const quoteLineItemSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  name: z.string().min(1, "Item name cannot be empty"),
  description: z.string().optional(),
  quantity: z.number(),
  unitPrice: z.number(),
  inventoryItem: inventoryItemSchema,
})

export const quoteSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  quoteNumber: z.number(),
  quoteName: z.string().min(1, "Quote name cannot be empty"),
  accountName: z.string().min(1, "Account name cannot be empty"),
  total: z.number(),
  status: quoteStatusSchema,
  date: z.date().optional(),
})

export const quoteDetailSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  ownder: userSchema,
  quote: quoteSchema,
  account: accountSchema,
  lineItems: z.array(quoteLineItemSchema),
  job: jobSchema,
})

export type Quote = z.infer<typeof quoteSchema>
export type QuoteStatus = z.infer<typeof quoteStatusSchema>
export type QuoteDetail = z.infer<typeof quoteDetailSchema>
export type QuoteLineItem = z.infer<typeof quoteLineItemSchema>
