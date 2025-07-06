import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes"

export default [
  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    //route("callback", "routes/auth/callback.tsx"),
    //route("logout", "routes/auth/logout.tsx"),
  ]),

  index("routes/home.tsx"),

  ...prefix("jobs", [
    index("routes/jobs/home.tsx"),
    route(":jid", "routes/jobs/job.tsx"),
  ]),

  ...prefix("quotes", [
    index("routes/quotes/home.tsx"),
    route(":qid", "routes/quotes/quote.tsx"),
  ]),

  ...prefix("calendar", [
    index("routes/calendar/home.tsx"),
  ]),

  route("purchasing", "routes/purchasing.tsx"),
  route("inventory", "routes/inventory.tsx"),
  route("reports", "routes/reports.tsx"),
] satisfies RouteConfig
