import { Link } from "react-router"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import type { LucideIcon } from "lucide-react"

export function NavCompany({ company }: {
  company: {
    name: string
    icon: LucideIcon
  }
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to="/">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{company.name}</span>
              <span className="truncate text-xs">Enterprise</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
