import { type ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "~/components/ui/checkbox";

export type Job = {
  id: string
  title: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  status: "measure" | "fabricate" | "install" | "punch"
}

export const columns: ColumnDef<Job>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const { street }: Job["address"] = row.getValue("address")
      return <span>{street}</span>
    }
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]

