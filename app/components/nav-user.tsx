import { SidebarMenu, SidebarMenuItem, useSidebar } from "./ui/sidebar"

export function NavUser({ user }: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        NavUser
        {/* TODO: DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, Avatar, AvatarImage, AvatarFallback */}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
