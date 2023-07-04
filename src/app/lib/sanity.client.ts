import { createClient } from "@sanity/client";
import { groq } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN!;

export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: "2023-07-03",
  token,
});
