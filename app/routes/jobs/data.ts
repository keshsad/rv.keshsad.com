import type { JobInput } from "~/lib/schemas/job";

const now = new Date()

export const mockData: JobInput[] = [
  {
    id: "27672077-d65a-4e1b-af8a-4802bc6a0ec6",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    jobNumber: 1,
    name: "cumque dolore et",
    accountName: "Casper LLC",
    status: "measure",
    total: 633.00,
    date: now,
    address: {
      street: "Kacey Meadows",
      city: "Fort Tressieland",
      state: "Alaska",
      zip: "58185",
    },
  },
  {
    id: "a33bab25-f942-4b02-a37c-8f9009fb91cc",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    jobNumber: 2,
    name: "corporis laborum non",
    accountName: "Stark Industries",
    status: "install",
    total: 123.00,
    date: now,
    address: {
      street: "Dawson Rest",
      city: "South Finnworth",
      state: "Massachusetts",
      zip: "18135",
    },
  },
  {
    id: "2412370c-c023-43df-9ee1-11dbcf3f15a4",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    jobNumber: 3,
    name: "quia eaque quisquam",
    accountName: "Wayne Enterprises",
    status: "fabricate",
    total: 840.00,
    date: now,
    address: {
      street: "Hoppe Unions",
      city: "Sharonstead",
      state: "Florida",
      zip: "13652",
    },
  },
  {
    id: "4e0c6c36-85ee-49e1-a51d-69305c368d5a",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    jobNumber: 4,
    name: "totam ipsa doloribus",
    accountName: "Pied Piper",
    status: "punch",
    total: 746.00,
    date: now,
    address: {
      street: "Cassin Land",
      city: "Ziemannboro",
      state: "Iowa",
      zip: "73738",
    },
  },
]
