// loader (runs on server) exchanges code for token
// and sets the `HttpOnly` cookie

import { redirect, type LoaderFunctionArgs } from "react-router";
import { client, setTokens } from "~/lib/auth";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  if (!code) throw new Error("Authorization code not found in callback URL.")

  const exchange = await client.exchange(code, `${url.origin}/callback`)
  if (exchange.err) {
    console.error("Token exchange error:", exchange.err)
    return redirect("/login?error=auth_failed")
  }

  return setTokens(exchange.tokens.access, exchange.tokens.refresh)
}
