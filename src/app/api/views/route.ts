import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const KEY = "site:total-views";

export async function GET() {
  const total = (await kv.get<number>(KEY)) ?? 0;
  return NextResponse.json({ total });
}

export async function POST() {
  const total = await kv.incr(KEY);
  return NextResponse.json({ total });
}
