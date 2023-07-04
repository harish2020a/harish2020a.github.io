import { client } from "@/app/lib/sanity.client";
import { Social } from "@/app/types/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == 'social']`;

export async function GET() {
  const socials: Social[] = await client.fetch(query);
  return NextResponse.json({ socials });
}
