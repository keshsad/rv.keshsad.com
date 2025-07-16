import { Outlet } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { SiteHeader } from "~/components/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function LayoutProtected() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="w-full h-full">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
