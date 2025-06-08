import type { Route } from "./+types/quotes";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Quotes • RV" },
    { name: "description", content: "Quotes for Real Value" },
  ];
}


export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Quotes({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Quotes</h1>
    </div>
  );
}
