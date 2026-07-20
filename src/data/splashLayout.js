// Fractional (0-1) bounding boxes for each trade card as it appears in
// /public/images/home-splash.png, so we can lay real, tappable buttons on
// top of the artwork. Order here matches the artwork's left-to-right,
// top-to-bottom layout — independent of the order trades are defined in
// trades.js.
export const SPLASH_LAYOUT = [
  { id: 'electrician', x0: 0.168, x1: 0.333, y0: 0.292, y1: 0.478 },
  { id: 'chef',        x0: 0.333, x1: 0.498, y0: 0.292, y1: 0.478 },
  { id: 'carpenter',   x0: 0.498, x1: 0.663, y0: 0.292, y1: 0.478 },
  { id: 'plumber',     x0: 0.663, x1: 0.828, y0: 0.292, y1: 0.478 },

  { id: 'mechanic',    x0: 0.168, x1: 0.333, y0: 0.500, y1: 0.686 },
  { id: 'farmer',      x0: 0.333, x1: 0.498, y0: 0.500, y1: 0.686 },
  { id: 'nurse',       x0: 0.498, x1: 0.663, y0: 0.500, y1: 0.686 },
  { id: 'firefighter', x0: 0.663, x1: 0.828, y0: 0.500, y1: 0.686 },

  { id: 'artist',      x0: 0.168, x1: 0.333, y0: 0.708, y1: 0.868 },
  { id: 'programmer',  x0: 0.333, x1: 0.498, y0: 0.708, y1: 0.868 },
  { id: 'ai',          x0: 0.498, x1: 0.663, y0: 0.708, y1: 0.868 },
  { id: 'pastor',      x0: 0.663, x1: 0.828, y0: 0.708, y1: 0.868 },
];

// Fraction box covering the "Badges Earned" pill in the artwork's top-right
// corner, so we can overlay a live count on top of the static image.
export const BADGE_COUNTER_BOX = { x0: 0.855, x1: 0.958, y0: 0.028, y1: 0.105 };
