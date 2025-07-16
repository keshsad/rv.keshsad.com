import type { Route } from "./+types/index";

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
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Home</h1>
    </div>
  );
}
