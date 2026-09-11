# Architecture notes

## Design goals

- Easy to change without tracing data through the whole app
- Static by default for speed, reliability, and simple Vercel deployment
- Reusable components without premature abstraction
- Client-side JavaScript only where interaction requires it

## Boundaries

`app/` owns routes and page composition. `components/` owns reusable interface elements. `lib/` owns typed content and site configuration. `content/` owns writing. `public/` owns images and downloadable files.

Pages are React Server Components by default. The theme selector and mobile menu are the only client components because they need browser state and interaction.

## Content model

Projects are typed objects in `lib/projects.ts`. This makes the card layout consistent while keeping edits simple.

Blog posts are local MDX files. `lib/posts.ts` validates the required frontmatter, calculates reading time, sorts articles, and filters drafts. No database, CMS, or generated content layer is needed for version one.

## Styling

Global CSS defines the design tokens and foundational behavior. Each component and page uses a colocated CSS Module, keeping styles local and making ownership obvious.

Radix UI handles the behavior and accessibility details for dropdown menus. The visual design remains custom, so the site does not inherit a generic component-library look.
