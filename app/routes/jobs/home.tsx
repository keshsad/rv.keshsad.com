import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jobs • RV" },
    { name: "description", content: "Jobs for Real Value" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Jobs({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Jobs</h1>
    </div>
  );
}
