import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    reply:
      "Thanks for reaching out. I can answer questions and help you book a consultation. Share your goals and preferred timing.",
    debug: {
      received: body,
      note: "Connect Gemini in lib/gemini.ts and wire it here for production."
    }
  });
}
