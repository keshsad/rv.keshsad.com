import type { Route } from "./+types/jobs";

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
    <>
      <p>{loaderData.message}</p>
      <h1>Jobs</h1>
    </>
  );
}
