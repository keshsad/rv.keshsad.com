import type { Route } from "./+types/home";

import { columns, type Job } from "./columns";
import { DataTable } from "./data-table";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jobs • RV" },
    { name: "description", content: "Jobs for Real Value" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  return {
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
    jobsData: await getJobsData()
  }
}

export default function Jobs({ loaderData }: Route.ComponentProps) {
  const data = loaderData.jobsData

  return (
    <div className="w-full h-full p-8">
      <div className="container mx-auto py-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

async function getJobsData(): Promise<Job[]> {
  return [
    {
      id: "ee16b7a4-4a5c-49f8-90cc-88463b34861e",
      title: "dignissimos-dolores-sequi",
      address: {
        street: "125 Alexandra Shores",
        city: "East Bethanyhaven",
        state: "MS",
        zip: "69762",
      },
      status: "measure",
    },
    {
      id: "4251808e-2425-4b2a-b9c2-4f49aa1dc52a",
      title: "aut-sit-consectetur",
      address: {
        street: "125 Alexandra Shores",
        city: "East Bethanyhaven",
        state: "MS",
        zip: "69762",
      },
      status: "fabricate",
    },
    {
      id: "df4af55f-a255-4e49-b96a-4c96efed9149",
      title: "molestias-sed-sed",
      address: {
        street: "125 Alexandra Shores",
        city: "East Bethanyhaven",
        state: "MS",
        zip: "69762",
      },
      status: "install",
    },
    {
      id: "9a58417b-b7d0-4263-b484-b877acd04c9c",
      title: "ab-consequatur-modi",
      address: {
        street: "125 Alexandra Shores",
        city: "East Bethanyhaven",
        state: "MS",
        zip: "69762",
      },
      status: "punch",
    }
  ]
}
