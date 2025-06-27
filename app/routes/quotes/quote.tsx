import type { Route } from "./+types/quote";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Quote • RV" },
    { name: "description", content: "Quote in Real Value" },
  ];
}

export function loader({ context, params }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Quotes({ loaderData, params }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Quotes: {params.qid}</h1>
    </div>
  );
}
