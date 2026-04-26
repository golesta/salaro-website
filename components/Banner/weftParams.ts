// Per-page weft parameters.
// y values are FRACTIONS of band height (0 = top of band, 1 = bottom of band).
// The component multiplies by viewBox height when rendering the path.

export type WeftParams = {
  bannerHeight: string;
  viewBoxHeight: number;
  weft: {
    x0: number;
    y0Frac: number;
    xc: number;
    ycFrac: number;
    x1: number;
    y1Frac: number;
  } | null;
  knots: number[];
};

export const WEFT_PARAMS: Record<string, WeftParams> = {
  home: {
    bannerHeight: "calc(100vh - 64px)",
    viewBoxHeight: 812,
    weft: { x0: 80, y0Frac: 0.739, xc: 720, ycFrac: 0.756, x1: 1360, y1Frac: 0.741 },
    knots: [218, 540, 914, 1208],
  },
  "services-index": {
    bannerHeight: "clamp(500px, 60vh, 700px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.640, xc: 720, ycFrac: 0.655, x1: 1360, y1Frac: 0.640 },
    knots: [540, 914],
  },
  "ai-development": {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.640, xc: 450, ycFrac: 0.660, x1: 820, y1Frac: 0.643 },
    knots: [218, 424, 608],
  },
  "web-development": {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.665, xc: 720, ycFrac: 0.628, x1: 1360, y1Frac: 0.591 },
    knots: [389, 762, 1117],
  },
  "wordpress-geo": {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 120, y0Frac: 0.638, xc: 740, ycFrac: 0.650, x1: 1360, y1Frac: 0.640 },
    knots: [484, 750, 892, 1208],
  },
  migrations: {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.640, xc: 720, ycFrac: 0.601, x1: 1360, y1Frac: 0.566 },
    knots: [135, 1253],
  },
  consulting: {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 400, y0Frac: 0.640, xc: 720, ycFrac: 0.650, x1: 1040, y1Frac: 0.640 },
    knots: [720],
  },
  "projects-index": {
    bannerHeight: "clamp(380px, 46vh, 540px)",
    viewBoxHeight: 320,
    weft: { x0: 420, y0Frac: 0.762, xc: 720, ycFrac: 0.770, x1: 1020, y1Frac: 0.762 },
    knots: [540, 900],
  },
  about: {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.628, xc: 720, ycFrac: 0.668, x1: 1360, y1Frac: 0.628 },
    knots: [400, 720, 1040],
  },
  team: {
    bannerHeight: "clamp(520px, 62vh, 740px)",
    viewBoxHeight: 440,
    weft: { x0: 80, y0Frac: 0.640, xc: 720, ycFrac: 0.650, x1: 1360, y1Frac: 0.640 },
    knots: [240, 320, 1100],
  },
  contact: {
    bannerHeight: "clamp(400px, 48vh, 560px)",
    viewBoxHeight: 320,
    weft: { x0: 570, y0Frac: 0.762, xc: 720, ycFrac: 0.768, x1: 870, y1Frac: 0.762 },
    knots: [720],
  },
  blog: {
    bannerHeight: "clamp(400px, 48vh, 560px)",
    viewBoxHeight: 320,
    weft: { x0: 420, y0Frac: 0.762, xc: 720, ycFrac: 0.770, x1: 1020, y1Frac: 0.762 },
    knots: [540, 900],
  },
  "project-detail": {
    bannerHeight: "clamp(460px, 54vh, 640px)",
    viewBoxHeight: 400,
    weft: null,
    knots: [],
  },
};
