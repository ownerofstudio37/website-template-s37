import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    status: "received",
    message: "Booking request captured. Connect Supabase to persist and confirm.",
    payload
  });
}
