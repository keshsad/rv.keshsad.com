import type { Route } from "./+types/inventory";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Inventory • RV" },
    { name: "description", content: "Inventory for Real Value" },
  ];
}


export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Inventory({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <p>{loaderData.message}</p>
      <h1>Inventory</h1>
    </>
  );
}
