import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export async function BlogPostContent({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false }],
        ],
      },
    },
  });

  return content;
}
