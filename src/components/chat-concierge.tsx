"use client";

import { useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

export function ChatConcierge() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I can answer questions and help you book a consultation. What are you looking to achieve?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: input }
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });
      
      const data = await response.json();
      
      // Handle both successful responses and error responses
      const replyContent = data.reply || data.error || "I'm having trouble connecting. Please try again.";
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: replyContent }
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please refresh and try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const submitBooking = async () => {
    setBookingStatus(null);
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Prospective Client",
        email: "client@example.com",
        requestedSlot: "Next week, 30-min strategy session"
      })
    });
    const data = await response.json();
    setBookingStatus(data.message ?? "Request submitted.");
  };

  return (
    <div className="glass p-6" id="booking">
      <h2 className="text-xl font-semibold">AI concierge</h2>
      <p className="mt-2 text-sm text-white/70">
        Gemini-powered assistance for questions, qualification, and booking.
      </p>
      <div className="mt-6 space-y-3 text-sm">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`rounded-2xl border border-white/10 p-4 ${
              message.role === "assistant"
                ? "bg-ink-800/60 text-white/80"
                : "bg-ink-800/30 text-white/70"
            }`}
          >
            <p className="text-xs uppercase text-white/40">
              {message.role === "assistant" ? "AI" : "Client"}
            </p>
            <p className="mt-2">{message.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about services, pricing, or availability..."
          className="w-full rounded-xl border border-white/10 bg-ink-800/40 px-4 py-2 text-sm text-white outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          Send
        </button>
      </div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-ink-800/40 p-4 text-sm text-white/70">
        <p className="font-semibold text-white">Ready to book?</p>
        <p className="mt-1">
          The concierge will confirm availability and collect details.
        </p>
        <button
          onClick={submitBooking}
          className="mt-3 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:text-white"
        >
          Request a consultation
        </button>
        {bookingStatus ? (
          <p className="mt-3 text-xs text-accent-500">{bookingStatus}</p>
        ) : null}
      </div>
    </div>
  );
}
