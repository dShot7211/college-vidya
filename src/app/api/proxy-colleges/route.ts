// /app/api/proxy-colleges/route.ts (App Router)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const res = await fetch(
    "https://admin.collegevidya.com/getuserbyuniversity/",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
