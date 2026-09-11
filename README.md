# daebecodin.dev

Durand's portfolio and writing site. It is built with Next.js, React, TypeScript, CSS Modules, Radix UI, and local MDX files.

## Run it locally

Install [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/), then run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Before publishing a change, run:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Where to edit things

The files are deliberately separated by responsibility:

- `lib/site.ts` — name, email, navigation, and social links
- `lib/profile.ts` — skills shown on the homepage and About page
- `lib/projects.ts` — project cards and their links
- `content/blog/` — blog articles written in MDX
- `app/` — pages and page-specific styling
- `components/` — reusable interface pieces
- `app/globals.css` — color tokens, light/dark themes, and global defaults
- `public/projects/` — project screenshots

## Add a project

1. Put its screenshot in `public/projects/project-name/`.
2. Open `lib/projects.ts`.
3. Copy the existing project object and change its values.
4. Use a date in `YYYY-MM-DD` format. Projects are sorted newest first.
5. Set `featured: true` to show it on the homepage.

Every project can have a live link, GitHub link, both, or neither. Add an `articleSlug` later if a supporting build note is published.

## Write a blog post

1. Copy `content/blog/_template.mdx`.
2. Rename the copy to a URL-friendly name, such as `learning-the-windows-api.mdx`.
3. Fill in the frontmatter at the top and write with Markdown below it.
4. Keep `draft: true` while working.
5. Change it to `draft: false` when it is ready to appear on the site.

The site calculates reading time, creates the article URL, adds published posts to the RSS feed and sitemap, and shows a table of contents when a post has at least three headings.

## Theme

Dark mode is the first-visit default. Readers can switch between Dark, System, and Light, and their choice is remembered.

The palette lives in CSS variables at the top of `app/globals.css`. Changing a token there updates every component that uses it.

## Résumé and profile image

These are intentionally hidden until the final files are available. When adding them:

- save the résumé as `public/durand-dyer-resume.pdf`
- save the profile image under `public/profile/`
- add the résumé navigation item in `lib/site.ts`

## Deploy to Vercel

Push the repository to GitHub, import it in Vercel, and accept the detected Next.js settings. Vercel Web Analytics is already included; enable Analytics for the project in the Vercel dashboard after deployment.
