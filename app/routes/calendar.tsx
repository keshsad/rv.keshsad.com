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
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Calendar</h1>
    </div>
  );
}
