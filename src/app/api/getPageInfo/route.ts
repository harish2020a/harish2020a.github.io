import { client } from "@/app/lib/sanity.client";
import { PageInfo } from "@/app/types/typings";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`*[_type == 'pageInfo'][0]`;

export async function GET() {
  const pageInfo: PageInfo = await client.fetch(query);
  return NextResponse.json({ pageInfo });
}
