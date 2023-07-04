import { client } from "@/app/lib/sanity.client";
import { Project } from "@/app/types/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
  *[_type == 'project']{
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const projects: Project[] = await client.fetch(query);
  return NextResponse.json({ projects });
}
