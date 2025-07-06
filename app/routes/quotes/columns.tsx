import { type ColumnDef } from "@tanstack/react-table"

export type Quote = {
  id: string
  title: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  status: "sent" | "received" | "accepted" | "rejected" | "cancelled" | "completed"
}

export const columns: ColumnDef<Quote>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
