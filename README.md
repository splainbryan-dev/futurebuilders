# FutureBuilders

A free educational app where kids pick an age group, then explore trades
(Electrician, Chef, Carpenter, Plumber, Mechanic, Farmer, Nurse, Firefighter,
Artist & Designer, Software Developer) via a short video + facts + a quiz.
Content is adaptive across three tiers: ages 5-8, 9-12, 13-17. Completing a
quiz earns a "passport stamp" for that trade, tracked in the header.

## Adding videos

Each trade in `src/data/trades.js` has a `videoId` field — the part of a
YouTube URL after `watch?v=`. Trades with `videoId: null` show a "video
coming soon" placeholder instead. To add one:

1. Find a video you've actually watched and are comfortable with — check
   there are no ads for the wrong audience, comments are off or moderated,
   and the "up next" suggestions on the video aren't questionable.
2. Copy the ID from the URL (e.g. `dQw4w9WgXcQ` from
   `youtube.com/watch?v=dQw4w9WgXcQ`) and set `videoId: 'dQw4w9WgXcQ'`.

Videos load via `youtube-nocookie.com` (YouTube's privacy-enhanced embed
domain) and only fetch anything from YouTube after a kid taps play — this
keeps the app from pinging YouTube's trackers just from viewing the page,
which matters if you publish this under Google Play's Designed for Families
program or need COPPA compliance.

Currently filled in: Electrician, Firefighter. The other 8 are placeholders.

## Run locally

```bash
npm install
npm run dev
```

## Build for web (Vercel)

```bash
npm run build
```
Deploy the `dist/` folder to Vercel as usual.

## Package as an Android app (Capacitor)

```bash
npm install @capacitor/core @capacitor/android
npx cap init "Trade Explorer" "com.yourorg.tradeexplorer" --web-dir=dist
npm run build
npx cap add android
npx cap sync
npx cap open android
```
Then build/run from Android Studio as usual.

## Extending it

- **Add a trade**: add an entry to `src/data/trades.js` with `facts` for
  `young`/`mid`/`teen` and one `quiz` question per tier.
- **Add more quiz questions per trade**: change `trade.quiz[tierId]` from a
  single object to an array and update `Quiz.jsx`/`TradeDetail.jsx` to loop
  through them.
- **Swap the passport-stamp visual** for a real image/SVG badge per trade if
  you want higher production value than the emoji icons.
- All data is currently free of ads and stored only in the browser's
  `localStorage` (age group + earned stamps) — no accounts, no tracking,
  matching the "free educational purposes" goal.
