import { siteConfig } from '../../lib/site';
import { publishedPosts } from '../posts';

export async function GET() {
  const paths = ['/', '/about', '/writing', ...(await publishedPosts()).map(p => '/blog/' + encodeURIComponent(p.id))];
  const urls = paths.map(path => '<url><loc>' + siteConfig.url + path + '</loc></url>');
  return new Response('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.join('') + '</urlset>', {
    headers: { 'Content-Type': 'application/xml' },
  });
}
