import { SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb"
import { useLocation } from "react-router"
import { SearchForm } from "./search-form"

export function SiteHeader() {
  const location = useLocation()
  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map((segment, index, segments) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      url: "/" + segments.slice(0, index + 1).join("/"),
    }))

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.length ? crumbs.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={crumb.url}>{crumb.label}</BreadcrumbLink>
            </BreadcrumbItem>
          )) : (
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {crumbs.length > 1 && <BreadcrumbSeparator />}
        </BreadcrumbList>
      </Breadcrumb>
      <SearchForm className="ml-auto w-auto" />
    </header>

  )
}
