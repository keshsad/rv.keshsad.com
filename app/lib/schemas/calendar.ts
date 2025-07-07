import { z } from "zod"
import { userSchema } from "./user"
import { jobSchema } from "./job"

export const calendarEventTypeSchema = z.enum([
  "template",
  "new",
  "measurement",
  "fabrication",
  "cutting",
  "polish",
  "cut-outs",
  "install",
  "invoice",
  "punch",
  "finish",
])

export const calendarEventSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  type: calendarEventTypeSchema,
  jobNumber: z.number(),
  jobName: z.string().min(1, "Job name cannot be empty"),
  assigned: z.array(userSchema),
  startDate: z.date(),
  endDate: z.date(),
  notes: z.string().optional(),
})

export const calendarEventDetailSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  updatedAt: z.string().datetime({ offset: true }).transform((val) => new Date(val)),
  event: calendarEventSchema,
  job: jobSchema,
})

export type CalendarEvent = z.infer<typeof calendarEventSchema>
export type CalendarEventType = z.infer<typeof calendarEventTypeSchema>
export type CalendarEventDetail = z.infer<typeof calendarEventDetailSchema>
