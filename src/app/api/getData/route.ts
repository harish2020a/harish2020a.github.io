import { client } from "@/app/lib/sanity.client";
import { NextResponse } from "next/server";

const query = `
{
  "experiences":*[_type == 'experience']{
    ...,
    technologies[]->
  },
  "pageInfo":*[_type == 'pageInfo'][0],
  "projects":*[_type == 'project']{
    ...,
    technologies[]->
  },
      "skills": *[_type == 'skill'],
      "socials": *[_type == 'social'],
    }`;

export async function GET() {
  const data = await client.fetch(query);
  return NextResponse.json(data);
}
