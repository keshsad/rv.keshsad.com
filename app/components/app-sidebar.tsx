import { Hammer, Paperclip, Calendar, Warehouse, ShoppingCart, SquareChartGantt, SendHorizonal, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "./ui/sidebar"
import { Link } from "react-router"
import { NavPrimary } from "./nav-primary"
import { NavSecondary } from "./nav-secondary"
import { NavTertiary } from "./nav-tertiary"
import { NavUser } from "./nav-user"

//const items = [
//  { title: "Jobs", url: "/jobs", icon: Hammer },
//  { title: "Quotes", url: "/quotes", icon: Paperclip },
//  { title: "Calendar", url: "/calendar", icon: Calendar },
//]

const data = {
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
  navTertiary: [
    {
      title: "Support",
      url: "/support",
      icon: SendHorizonal,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
        <NavPrimary items={data.navPrimary} />
        <NavSecondary items={data.navSecondary} />
        <NavTertiary items={data.navTertiary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
