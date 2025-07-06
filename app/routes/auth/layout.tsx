import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-full h-full p-8">
      <Outlet />
    </div>
  );
}
