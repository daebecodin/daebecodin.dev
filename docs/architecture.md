# Architecture notes

Astro builds static HTML from the routes in `src/pages/`. Pages share the navigation, metadata, and footer in `src/layouts/Page.astro` and the stylesheet in `src/styles/site.css`. The article contents list uses native HTML disclosure and fragment links.

Project descriptions, skills, and contact links live in `lib/`. The blog collection validates MDX frontmatter in `src/content.config.ts`. The writing index, article routes, RSS feed, and sitemap all use the published entries from `src/posts.ts`. Public assets keep their original URLs.
