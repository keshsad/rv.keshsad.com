import { useState } from "react";
import { BookUser, Calendar, Check, ChevronsUpDown, Code, Hammer, Paperclip, Settings, Warehouse } from "lucide-react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent, Sidebar } from "./ui/sidebar";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const data = {
  items: [
    { name: "Jobs", icon: Hammer },
    { name: "Quotes", icon: Paperclip },
    { name: "Calendar", icon: Calendar },
    { name: "Inventory", icon: Warehouse },
    { name: "Accounts", icon: BookUser },
    { name: "Advanced", icon: Code },
  ]
}

export function NavSettings() {
  const [open, setOpen] = useState(false)
  const [settingsPage, setSettingsPage] = useState("Accounts")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <SidebarMenuItem>
        <DialogTrigger asChild>
          <SidebarMenuButton asChild size="sm">
            <button>
              <Settings />
              <span>Settings</span>
            </button>
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent className="overflow-hidden p-0 max-h-[calc(100%-2rem)] md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
          <DialogTitle className="sr-only">Settings</DialogTitle>
          <DialogDescription className="sr-only">Adjust your company settings here. This includes fields, templates, accounts, and more.</DialogDescription>
          <SidebarProvider>
            <Sidebar collapsible="none" className="hidden md:flex">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {/* jobs, quotes, accounts, etc */}
                      {data.items.map(item => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            onClick={() => setSettingsPage(item.name)}
                            isActive={item.name === settingsPage}
                            className="hover:cursor-pointer"
                          >
                            <div>
                              <item.icon />
                              <span>{item.name}</span>
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <div className="flex h-svh md:h-[480px] flex-1 flex-col overflow-hidden">
              <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="hidden md:flex items-center gap-2 px-4">
                  <span className="scroll-m-20 text-xl font-semibold tracking-tight">{settingsPage}</span>
                </div>
                <div className="flex md:hidden items-center gap-2 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="lg">
                        <span className="scroll-m-20 text-xl font-semibold tracking-tight">{settingsPage}</span>
                        <ChevronsUpDown className="ml-auto size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-(--radix-dropdown-menu-trigger-width)"
                      align="start"
                    >
                      {data.items.map(item => (
                        <DropdownMenuItem
                          key={item.name}
                          onSelect={() => setSettingsPage(item.name)}
                          className={""}
                        >
                          {item.name}
                          {item.name === settingsPage && <Check className="ml-auto" />}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-muted/50 aspect-video max-w-3xl rounded-xl"
                  />
                ))}
              </div>
            </div>
          </SidebarProvider>
        </DialogContent>
      </SidebarMenuItem>
    </Dialog>
  )
}
