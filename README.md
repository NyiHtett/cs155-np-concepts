# CS NP-Concepts Visualizer

Interactive Next.js site for CS155 algorithm visualizations.

## Pages
- `/` — shader hero landing
- `/vertex-cover` — APPROX-VERTEX-COVER step-by-step (CLRS §35.2)
- `/two-coloring` — BFS graph 2-coloring

## Develop
```bash
npm install
npm run dev
```

## Deploy to Vercel
```bash
vercel deploy
```

The HTML visualizers in `public/` are the original standalone files from the parent directory; the Next.js routes embed them via `<iframe>` so the hand-crafted animations and interactions render unchanged.
