import type { Route } from "./+types/calendar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Calendar • RV" },
    { name: "description", content: "Calendar for Real Value" },
  ];
}


export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Calendar({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <p>{loaderData.message}</p>
      <h1>Calendar</h1>
    </>
  );
}
