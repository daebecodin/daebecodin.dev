import rss from '@astrojs/rss';
import { siteConfig } from '../../lib/site';
import { publishedPosts } from '../posts';

export async function GET() {
  return rss({
    site: siteConfig.url, title: siteConfig.name, description: siteConfig.description,
    items: (await publishedPosts()).map(({ data, id }) => ({
      title: data.title, description: data.description,
      pubDate: new Date(data.publishedAt), link: '/blog/' + id,
    })),
  });
}
