import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home • RV" },
    { name: "description", content: "Quotes and jobs for Real Value" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <span>{loaderData.message} environment</span>
    </main>

  );
}
