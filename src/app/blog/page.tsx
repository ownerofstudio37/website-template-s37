import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="section-pad">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Insights</h1>
        <p className="mt-3 text-white/70">
          Premium strategy, AI best practices, and conversion-focused guidance.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {post.date}
            </p>
            <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
