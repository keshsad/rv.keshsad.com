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
    <>
      <p>{loaderData.message}</p>
      <h1>Purchasing</h1>
    </>
  );
}
