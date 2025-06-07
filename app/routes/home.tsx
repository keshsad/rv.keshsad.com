import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home • RV" },
    { name: "description", content: "Quotes and jobs for Real Value" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
          <ul>
            <li className="self-stretch p-3 leading-normal">{loaderData.message}</li>
            <li>
              <Link
                className="group flex items-center gap-3 self-stretch p-2 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                to="/jobs"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center gap-3 self-stretch p-2 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                to="/quotes"
              >
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>

  );
}
