import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar"
import { NavCompany } from "./nav-company"
import { NavPrimary } from "./nav-primary"
import { NavSecondary } from "./nav-secondary"
import { NavTertiary } from "./nav-tertiary"
import { NavUser } from "./nav-user"
import { Hammer, Paperclip, Calendar, Warehouse, ShoppingCart, SquareChartGantt } from "lucide-react"

const data = {
  navPrimary: [
    {
      title: "Jobs",
      url: "/jobs",
      icon: Hammer,
    },
    {
      title: "Quotes",
      url: "/quotes",
      icon: Paperclip,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    }
  ],
  navSecondary: [
    {
      title: "Purchasing",
      url: "/purchasing",
      icon: ShoppingCart,
    },
    {
      title: "Inventory",
      url: "/inventory",
      icon: Warehouse,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: SquareChartGantt,
    }
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavCompany />
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary items={data.navPrimary} />
        <NavSecondary items={data.navSecondary} />
        <NavTertiary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
