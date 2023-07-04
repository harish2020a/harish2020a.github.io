import { client } from "@/app/lib/sanity.client";
import { Experience } from "@/app/types/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == 'experience']{
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const experiences: Experience[] = await client.fetch(query);
  return NextResponse.json({ experiences });
}
