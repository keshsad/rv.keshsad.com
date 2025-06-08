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
    <div className="w-full h-full p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Inventory</h1>
    </div>
  );
}
