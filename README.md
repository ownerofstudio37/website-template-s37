# Voss Studio Client Platform

Premium, conversion-first template with a marketing site, AI concierge UI, and an admin command center.

## Features
- Sleek marketing experience designed for SEO and conversion
- Gemini-powered concierge API placeholder
- Supabase-ready data layer
- Blog + migration center to preserve SEO rankings
- Admin dashboard modules for CRM, AI lead scoring, project management, booking, CMS, email, SMS, and more

## Getting Started
1. Install Node.js 18+.
2. Copy `.env.example` to `.env.local` and fill in values.
3. Install dependencies: `npm install`.
4. Run the dev server: `npm run dev`.

## Supabase Notes
Create tables for `clients`, `leads`, `appointments`, `blog_posts`, and `chat_sessions`. Use RLS policies to protect client data.

## Gemini Notes
Connect the Gemini API in `src/lib/gemini.ts` and wire the response into `src/app/api/chat/route.ts`.

## Netlify
`netlify.toml` is included. Use Netlify environment variables for Supabase and Gemini keys.
