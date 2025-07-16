import type { Route } from "./+types/index";

import { columns } from "./columns";
import { mockData } from "./data";
import { jobSchema, type Job } from "~/lib/schemas/job";
import { DataTable } from "./data-table";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jobs • RV" },
    { name: "description", content: "Jobs for Real Value" },
  ];
}

export async function loader() {
  return jobSchema.array().parse(mockData)
}

export default function Jobs({ loaderData }: Route.ComponentProps) {
  const data: Job[] = loaderData

  return (
    <div className="w-full h-full p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Jobs</h1>
      <div className="container mx-auto py-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
