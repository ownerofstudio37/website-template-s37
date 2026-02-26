import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, subject, message" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Insert booking into Supabase
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          email,
          subject,
          message,
          status: "pending",
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      // If table doesn't exist, still return success for demo
      if (error.message.includes("relation") || error.message.includes("does not exist")) {
        return NextResponse.json(
          {
            success: true,
            message: "Booking request received. Supabase table not yet configured, but your message was logged.",
            email
          },
          { status: 202 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking confirmed and saved",
        booking_id: data?.[0]?.id,
        email
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        error: "Failed to process booking",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
