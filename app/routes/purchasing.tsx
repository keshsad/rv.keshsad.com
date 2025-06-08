import type { Route } from "./+types/purchasing";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Purchasing • RV" },
    { name: "description", content: "Purchasing for Real Value" },
  ];
}


export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Purchasing({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Purchasing</h1>
    </div>
  );
}
