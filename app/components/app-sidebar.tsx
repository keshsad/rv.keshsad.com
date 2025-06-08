import { Hammer, Paperclip, Calendar, Warehouse, ShoppingCart, SquareChartGantt, Drill } from "lucide-react"

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

const data = {
  company: {
    name: "Real Value",
    icon: Drill,
  },
  user: {
    name: "Manu",
    email: "manu@rockofadam.com",
    avatar: "https://github.com/keshsad.png",
  },
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
        <NavCompany company={data.company} />
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary items={data.navPrimary} />
        <NavSecondary items={data.navSecondary} />
        <NavTertiary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
