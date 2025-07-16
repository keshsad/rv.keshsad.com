import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes"

export default [
  layout("routes/layout-public.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("callback", "routes/auth/callback.tsx"),
  ]),
  layout("routes/layout-protected.tsx", [
    index("routes/index.tsx"),
    ...prefix("jobs", [
      index("routes/jobs/index.tsx"),
      route(":jid", "routes/jobs/job.tsx"),
    ]),
    ...prefix("quotes", [
      index("routes/quotes/index.tsx"),
      route(":qid", "routes/quotes/quote.tsx"),
    ]),
    ...prefix("calendar", [
      index("routes/calendar/index.tsx"),
    ]),
    route("purchasing", "routes/purchasing.tsx"),
    route("inventory", "routes/inventory.tsx"),
    route("reports", "routes/reports.tsx"),
  ]),
] satisfies RouteConfig
