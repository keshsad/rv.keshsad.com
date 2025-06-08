import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("jobs", "routes/jobs.tsx"),
  route("quotes", "routes/quotes.tsx"),
  route("calendar", "routes/calendar.tsx"),
  route("purchasing", "routes/purchasing.tsx"),
  route("inventory", "routes/inventory.tsx"),
  route("reports", "routes/reports.tsx"),
] satisfies RouteConfig;
