# FutureBuilders

A free educational app where kids pick an age group, then explore trades
(Electrician, Chef, Carpenter, Plumber, Mechanic, Farmer, Nurse, Firefighter,
Artist & Designer, Software Developer, Pastor/Ministry, AI & Robotics) via a
short video + facts + a quiz. Content is adaptive across three tiers: ages
5-8, 9-12, 13-17. Completing a quiz — or skipping it — earns a "passport
stamp" for that trade, tracked in the header.

## Videos

Each trade in `src/data/trades.js` has a `video` field, one of:

- `{ type: 'youtube', id: '...' }` — plays inline via `youtube-nocookie.com`,
  click-to-load so it doesn't ping YouTube until a kid taps play. Used for
  Electrician and Firefighter.
- `{ type: 'external', url: '...', source: '...' }` — a "Watch video" button
  that opens the video on its own site in a new tab. Used for the other 8
  trades, linking to the U.S. Department of Labor's CareerOneStop video
  library — official, ad-free, no comments section. (Not embedded inline
  since iframe-embedding wasn't confirmed to work on that site.)
- `video: null` — shows a "video coming soon" placeholder.

All 10 trades currently have a video. To swap a CareerOneStop link for an
embedded YouTube one later, just change the field to `{ type: 'youtube', id: '...' }`
— same checklist as before applies (watch it fully, check for ads/comments/
suggested-video quality before using it in a kids' app).

## Quiz

Tapping a trade badge shows facts + a video, then two options: "Take the
quiz" or "Skip quiz, get stamp" — both award the passport stamp, so reading
the quiz isn't a gate to finishing a trade.

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

## Home screen artwork

The trade-selection screen (`TradeSplash.jsx`) now renders your generated
artwork (`public/images/home-splash.png`) directly, with invisible tappable
buttons positioned on top of each card. The coordinates for those tap zones
live in `src/data/splashLayout.js` as fractions of the image's width/height,
so they scale with the image at any screen size.

I mapped these by sampling pixel colors in the image to find each card's
edges — they should be close, but if a tap zone feels slightly off after
testing on a phone, nudge the `x0`/`x1`/`y0`/`y1` values for that trade in
`splashLayout.js` (0 = left/top edge of image, 1 = right/bottom edge).

The "Badges Earned" counter in the top-right of the artwork is static in the
image, so a live counter is overlaid on top of it (`BADGE_COUNTER_BOX` in the
same file) showing the real count out of 12 trades.

Note: the image is ~2.8MB, which is fine for web but worth compressing
(e.g. via TinyPNG or `vite-plugin-image-optimizer`) before an Android build,
since Play Store and mobile data users are more size-sensitive.
