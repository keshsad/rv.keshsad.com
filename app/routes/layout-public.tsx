import { Outlet } from "react-router";

export default function LayoutPublic() {
  return (
    <main className="w-full h-full">
      <Outlet />
    </main>
  )
}
