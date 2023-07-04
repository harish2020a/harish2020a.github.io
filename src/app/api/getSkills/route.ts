import { client } from "@/app/lib/sanity.client";
import { Skill } from "@/app/types/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == 'skill']`;

export async function GET() {
  const skills: Skill[] = await client.fetch(query);
  return NextResponse.json({ skills });
}
