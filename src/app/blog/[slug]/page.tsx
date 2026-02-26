import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-pad">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          {post.date}
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">{post.title}</h1>
        <p className="mt-5 text-lg text-white/70">{post.excerpt}</p>
        <div className="mt-10 space-y-4 text-sm text-white/70">
          <p>
            This is placeholder content. Connect your Supabase CMS or import blog
            content to preserve SEO rankings and historical performance.
          </p>
          <p>
            Add long-form content, embedded media, and conversion CTAs tailored to
            your audience.
          </p>
        </div>
      </div>
    </article>
  );
}
