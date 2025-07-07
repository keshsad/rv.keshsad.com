import { z } from "zod"

export const inventoryItemSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  name: z.string().min(1, "Item name cannot be empty"),
  description: z.string().optional(),
  sku: z.string().min(1, "SKU cannot be empty"),
  quantityOnHand: z.number(),
  unitPrice: z.number(),
  location: z.string().optional(),
})

export type InventoryItem = z.infer<typeof inventoryItemSchema>
