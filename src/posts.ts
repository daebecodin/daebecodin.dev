import { getCollection } from 'astro:content';

export async function publishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));
}
