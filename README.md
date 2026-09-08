# TBS-StreamingApp — Proprietary Live Streaming Platform

**Status:** ⏳ Scaffolded — full build pending streaming provider research (per TBS-PLATFORM_PLAN.md)
**Port:** 3004 (dev, provisional)
**Domain:** stream.trainersbysport.com (planned)
**API:** TBS-RecruiterApp-DotNet (port 5056) — same JWT/accounts as the rest of the platform

## Provisional scope (from the plan)

- Trainers host live sessions; patrons/subscribers join as viewers
- Recorded sessions saved and available on-demand after the stream
- Multi-tenant: same infrastructure will serve Tutors by Subject and other licensees
- Agora is the primary provider candidate; Twilio / Daily are fallbacks

## Blocked on (pending decisions from the plan)

1. **Final streaming provider** — awaiting Reggie's research document (Agora vs Twilio vs Daily)
2. **Storage** — separate VPS vs AWS migration for video/recording storage
3. **Integration shape** — truly standalone app vs embedded into the platform web

## What exists now

- Vite + React 19 + Tailwind 4 scaffold matching the other TBS web apps (`npm install`, `npm run dev`)
- Landing page listing upcoming capabilities
- API side: the live-streaming module (`/api/trainer/livestreams`, `/api/livestreams/live`,
  Agora token issuing) is **not built yet** — it lands together with the provider decision so
  tokens/webhooks match the chosen vendor.

## When the provider is confirmed

1. Add provider SDK (e.g. `agora-rtc-sdk-ng`) here and token issuing in the API
2. Build API Module 11 (schedule/start/end/join endpoints + LiveStreams table)
3. Host view (trainer) + viewer grid (patrons), recording toggle, on-demand library
