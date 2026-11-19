import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://daebecodin.dev',
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
  redirects: {
    '/blog': '/writing',
    '/projects': '/about#projects',
    '/experience': '/about',
  },
});
