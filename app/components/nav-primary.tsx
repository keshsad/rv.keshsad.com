import type { LucideIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar"
import { Link, useMatch } from "react-router"

export function NavPrimary({ items }: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Operations</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem
              key={item.title}
              onClick={() => isMobile && toggleSidebar()}
            >
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={useMatch(item.url) ? true : undefined}>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
