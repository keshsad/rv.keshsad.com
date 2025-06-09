import { Link } from "react-router"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Drill } from "lucide-react"

const company = {
  name: "Real Value",
  plan: "Enterprise",
  icon: Drill,
}

export function NavCompany() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to="/">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{company.name}</span>
              <span className="truncate text-xs">{company.plan}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
