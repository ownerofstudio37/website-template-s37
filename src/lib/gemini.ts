import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY ?? "";

export async function generateConciergeReply(prompt: string) {
  if (!apiKey) {
    return {
      text: "Gemini API key missing. Add GEMINI_API_KEY to enable responses.",
      error: "NO_API_KEY"
    };
  }

  try {
    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    if (!text) {
      throw new Error("Empty response from Gemini");
    }
    
    return { text };
  } catch (error: any) {
    console.error("Gemini API error:", error);
    
    // Provide specific error messages
    if (error?.message?.includes("API_KEY_INVALID")) {
      return {
        text: "The Gemini API key is invalid. Please check your GEMINI_API_KEY in Netlify environment variables.",
        error: "INVALID_KEY"
      };
    }
    
    if (error?.message?.includes("quota") || error?.message?.includes("RESOURCE_EXHAUSTED")) {
      return {
        text: "Gemini API quota exceeded. Please check your Google AI Studio quota or upgrade your plan.",
        error: "QUOTA_EXCEEDED"
      };
    }
    
    return {
      text: `Gemini API error: ${error?.message || "Unknown error"}. Please check the Netlify function logs for details.`,
      error: "API_ERROR"
    };
  }
}
