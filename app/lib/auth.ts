import { createClient } from "@openauthjs/openauth/client"
import { createCookie } from "react-router"

const client = createClient({
  clientID: "rv-web-client",
  issuer: "https://auth.keshsad.com"
})

// instead of cookies.set, use `new Response(... { headers })`
//
// loader/action returns `Response` object,
// add `Set-Cookie` header to tell browser to store auth cookie
