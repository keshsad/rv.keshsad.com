import type { Route } from "./+types/reports";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Reports • RV" },
    { name: "description", content: "Reports for Real Value" },
  ];
}


export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Reports({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Reports</h1>
    </div>
  );
}
