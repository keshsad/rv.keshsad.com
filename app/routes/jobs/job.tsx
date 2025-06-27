import type { Route } from "./+types/job";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Job • RV" },
    { name: "description", content: "Job in Real Value" },
  ];
}

export function loader({ context, params }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Job({ loaderData, params }: Route.ComponentProps) {
  return (
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Job: {params.jid}</h1>
    </div>
  );
}
