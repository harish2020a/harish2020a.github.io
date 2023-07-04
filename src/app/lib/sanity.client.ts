import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();
