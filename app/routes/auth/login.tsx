// just link to auth server

import { GalleryVerticalEnd } from "lucide-react"
import { type LoaderFunctionArgs } from "react-router"
import { LoginForm } from "~/components/login-form"
import { client } from "~/lib/auth"
import type { Route } from "./+types/login"

export async function loader({ request }: LoaderFunctionArgs) {
  const redirect_uri = "https://rv.keshsad.com/callback"
  const { url } = await client.authorize(redirect_uri, "code")
  return { url }
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const { url } = loaderData

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Real Value
        </a>
        <LoginForm url={url} />
      </div>
    </div>
  )
}
