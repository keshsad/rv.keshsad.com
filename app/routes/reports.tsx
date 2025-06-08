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
    <>
      <p>{loaderData.message}</p>
      <h1>Reports</h1>
    </>
  );
}
