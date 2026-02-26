import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY ?? "";

export async function generateConciergeReply(prompt: string) {
  if (!apiKey) {
    return {
      text: "Gemini API key missing. Add GEMINI_API_KEY to enable responses."
    };
  }

  const client = new GoogleGenerativeAI(apiKey);
  const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return { text: result.response.text() };
}
