# daebecodin.dev

Durand Dyer’s personal website, built with Astro, TypeScript, and MDX.

## Local development

Use Node.js 22.16 or later in the 22.x line and pnpm 9.12.3.

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4321
```

Open http://127.0.0.1:4321 for the production preview.

## Editing

- Home and About live in `src/pages/`. Social links, projects, and skills live in `lib/`.
- Copy `content/blog/_template.mdx` to a new filename. Set a publication date in YYYY-MM-DD format and set `draft: false` to publish. The filename supplies the post slug.
- The Writing index, RSS feed, sitemap, and individual post pages use the same published collection. Article navigation uses the headings and IDs produced by Astro. Use fenced code and dollar-delimited math in MDX.
- The writing index is at `/writing`. Existing articles keep their `/blog/<slug>` URLs. The old blog, projects, and experience indexes redirect to their corresponding pages.
- Shared layout and styles live in `src/layouts/Page.astro` and `src/styles/site.css`. Fonts, résumé, and project images are served from `public/`.
