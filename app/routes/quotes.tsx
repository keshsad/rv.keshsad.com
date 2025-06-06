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
    <>
      <p>{loaderData.message}</p>
      <h1>Quotes</h1>
    </>
  );
}
