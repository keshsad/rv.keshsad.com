import { SendHorizontal, Settings } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Link } from "react-router"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

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
          <Dialog>
            <SidebarMenuItem>
              <DialogTrigger asChild>
                <SidebarMenuButton asChild size="sm">
                  <button>
                    <Settings />
                    <span>Settings</span>
                  </button>
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>Adjust your company settings here. This includes your fields, templates, accounts, and more</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="link" size="lg">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" variant="outline" size="lg">Save</Button>
                </DialogFooter>
              </DialogContent>
            </SidebarMenuItem>
          </Dialog>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
