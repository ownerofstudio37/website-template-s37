# Studio 37 AI Agent Instructions

## Project Overview
Studio 37 is a **premium Next.js 14 client platform** with three integrated layers:
1. **Marketing site** (public pages, blog, landing) — SEO-optimized at `src/app/page.tsx`, `src/app/blog/[slug]`
2. **AI concierge** (real-time chat) — Gemini-powered at `src/app/api/chat/route.ts`, `src/lib/gemini.ts`
3. **Admin dashboard** (modular command center) — Stub pages at `src/app/admin/*` controlled by `src/data/admin-sections.ts`

Tech stack: Next.js 14, React 18, TypeScript, Tailwind CSS, Supabase (RLS), Gemini 2.5 Flash.

## Critical Patterns & Conventions

### Architecture: Data-Driven Routing
- Admin modules are **configured, not hardcoded**. New dashboard sections: add entry to `src/data/admin-sections.ts` → auto-routes to `/admin/{slug}` → rendered by `AdminSectionPage` component.
- Blog posts: metadata in `src/data/blog.ts`, dynamic route handler at `src/app/blog/[slug]/page.tsx` uses slug to fetch content.
- **Pattern**: Config file → page template → component receives structured data.

### Supabase Integration
- Client initialized at `src/lib/supabase/client.ts` using `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Mock data in `src/data/mock-*.ts` (clients, leads, appointments, content, performance, projects) — **replace with real Supabase queries after setup**.
- RLS policies required on `clients`, `leads`, `appointments`, `blog_posts`, `chat_sessions` tables.
- Use `getSupabaseClient()` to access singleton instance; gracefully handles missing env vars.

### Gemini API Integration
- Endpoint: `POST /api/chat` accepts `{ messages: Array<{ content: string }> }`.
- Error handling: returns `{ text: string, error?: string }` with specific codes (NO_API_KEY, INVALID_KEY, QUOTA_EXCEEDED, API_ERROR).
- Used by `ChatConcierge` component for real-time AI responses.
- Model: `gemini-2.5-flash`. API key required: `GEMINI_API_KEY`.

### Styling & Theme
- **Tailwind** with custom color palette:
  - `ink-900/800/700` (dark backgrounds)
  - `brand-500/600/700` (blue accent, default CTA)
  - `accent-500/600` (teal accent)
  - Shadow: `shadow-glow` (brand blue glow effect)
- Responsive breakpoint: `lg:` prefix for 1024px+. Mobile-first, no `sm:` overrides unless necessary.
- Component cards use `.card` class (see `src/components/admin-section-page.tsx`).

### Development Workflow
- **Dev server**: `npm run dev` → `http://localhost:3000`
- **Build & start**: `npm run build && npm start`
- **Linting**: `next lint` (checks TypeScript, ESLint, Tailwind)
- **Environment**: Copy `.env.example` to `.env.local`, fill `GEMINI_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Deployed to Netlify; use `netlify.toml` for build config and env var mapping.

## When Adding Features

1. **New admin section**: Edit `src/data/admin-sections.ts` + create `src/app/admin/{slug}/page.tsx` + wire mock data.
2. **New API endpoint**: Create file in `src/app/api/{route}/route.ts`, export `POST`/`GET` handler, return `NextResponse.json()`.
3. **New component**: Place in `src/components/`, export as named export, use TypeScript `type Props = { ... }` for prop definitions.
4. **New data model**: Add mock file in `src/data/mock-{entity}.ts`, prepare Supabase schema docs in README.md.
5. **External integration** (email, SMS, payment): Create wrapper in `src/lib/{service}.ts`, import in routes, handle errors gracefully.

## Key Files to Know
- `src/app/layout.tsx` — Global metadata, headers, footers, Supabase init
- `src/app/admin/layout.tsx` — Admin auth guard (stub), admin nav structure
- `src/components/chat-concierge.tsx` — Chat UI, integrates `/api/chat`
- `tailwind.config.ts` — Theme colors and responsive config
- `next.config.mjs` — Next.js build optimizations
- `netlify.toml` — Deployment config, environment mapping
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
