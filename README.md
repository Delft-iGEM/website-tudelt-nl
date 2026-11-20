# iGEM TU Delft website

The public website of the iGEM TU Delft team: a single static page built with
[Next.js](https://nextjs.org) (static export) and [Tailwind CSS](https://tailwindcss.com).
Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/publish.yml`.

## Local development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in ./out
```

## Where things live

| What | Where |
| --- | --- |
| Page sections (hero, What is iGEM, stats, projects, join, footer) | `components/` |
| Past projects: names, tracks, awards, logos, team photos | `data/projects.ts` |
| Images | `public/images/` (project logos and team photos in `public/images/projects/`) |
| Colours and section backgrounds | `styles.css` |

### Adding a new year's project

1. Put the team photo (about 1100 px wide, JPEG) and logo in `public/images/projects/`,
   named `<year>-team.jpg` and `<year>-<name>-logo.png`. The logo sits directly on the dark
   card, so use a transparent PNG or SVG with light artwork (if it's dark, set `invertLogo: true`).
   If the logo doesn't include the project's name, set `showName: true`.
2. Add an entry at the top of the `projects` list in `data/projects.ts`, including the team's
   `wiki` link (cards open it when clicked). If the project's track is new, add its colour
   to `villageColors`.
3. Update the hero's "See our latest project" link in `components/Hero.tsx`.

The project count, the Grand Prize stat and the filter buttons are derived from the list.
