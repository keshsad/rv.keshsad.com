import { createClient } from "@openauthjs/openauth/client"
import { createCookie, redirect } from "react-router"

export const client = createClient({
  clientID: "rv-web-client",
  issuer: "https://auth.keshsad.com"
})

// instead of cookies.set, use `new Response(... { headers })`
//
// loader/action returns `Response` object,
// add `Set-Cookie` header to tell browser to store auth cookie

const accessTokenCookie = createCookie("access_token", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  maxAge: 60 * 60 * 24
})

const refreshTokenCookie = createCookie("access_token", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  maxAge: 60 * 60 * 24
})

export async function setTokens(access: string, refresh: string) {
  const headers = new Headers()
  headers.append("Set-Cookies", await accessTokenCookie.serialize(access))
  headers.append("Set-Cookies", await refreshTokenCookie.serialize(refresh))
  return redirect("/", { headers })
}

export async function getTokens(request: Request) {
  const cookies = request.headers.get("Cookie")
  const access = (await accessTokenCookie.parse(cookies)) || {}
  const refresh = (await refreshTokenCookie.parse(cookies)) || {}
  return { access, refresh }
}
