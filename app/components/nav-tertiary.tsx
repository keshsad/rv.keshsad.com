import { SendHorizontal } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Link } from "react-router"
import { NavSettings } from "./nav-settings"

export function NavTertiary() {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="sm">
              <Link to="mailto:rishi@keshsad.com">
                <SendHorizontal />
                <span>Feedback</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <NavSettings />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
