import { NextResponse } from "next/server";
import { generateConciergeReply } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1]?.content || "";

    if (!latestMessage) {
      return NextResponse.json(
        { error: "Empty message" },
        { status: 400 }
      );
    }

    // Create context for the Gemini model
    const systemPrompt = `You are a helpful AI concierge for a client services platform. You help answer questions about services, capabilities, and can assist with booking consultations. Be professional, friendly, and concise. If the user wants to book a consultation, ask for their email and preferred timing.`;

    const fullPrompt = `${systemPrompt}\n\nUser: ${latestMessage}`;

    // Call Gemini API
    const result = await generateConciergeReply(fullPrompt);

    if (!result.text) {
      throw new Error("No response from Gemini");
    }

    return NextResponse.json({
      reply: result.text,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Failed to process message",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
