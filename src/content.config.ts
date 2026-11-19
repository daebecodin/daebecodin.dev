import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './content/blog', pattern: ['*.mdx', '!_*.mdx'] }),
    schema: z.object({
      title: z.string(), description: z.string(),
      publishedAt: z.string().date(), updatedAt: z.string().date().optional(),
      tags: z.array(z.string()), draft: z.boolean(),
    }),
  }),
};
