'use client';

import { useState } from 'react';

// Mock blog posts data
const mockBlogPosts = [
  {
    id: '1',
    title: '10 Web Design Trends Dominating 2024',
    slug: '10-web-design-trends-2024',
    excerpt: 'From AI-powered layouts to immersive 3D experiences, discover the trends shaping modern web design.',
    status: 'published',
    author: 'Admin',
    publishDate: '2024-01-15',
    views: 12400,
    category: 'Design',
  },
  {
    id: '2',
    title: 'How AI is Transforming Digital Marketing',
    slug: 'ai-digital-marketing',
    excerpt: 'Explore how artificial intelligence is revolutionizing content creation, SEO, and customer engagement.',
    status: 'published',
    author: 'Admin',
    publishDate: '2024-01-10',
    views: 8900,
    category: 'Marketing',
  },
  {
    id: '3',
    title: 'Complete Guide to Next.js 14',
    slug: 'nextjs-14-guide',
    excerpt: 'Master the latest features of Next.js including Server Components, App Router, and performance optimizations.',
    status: 'draft',
    author: 'Admin',
    publishDate: '2024-01-20',
    views: 0,
    category: 'Development',
  },
];

export default function AdminBlogPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredPosts = mockBlogPosts.filter(post => {
    if (statusFilter === 'all') return true;
    return post.status === statusFilter;
  });

  const stats = {
    total: mockBlogPosts.length,
    published: mockBlogPosts.filter(p => p.status === 'published').length,
    draft: mockBlogPosts.filter(p => p.status === 'draft').length,
    totalViews: mockBlogPosts.reduce((sum, p) => sum + p.views, 0),
  };

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('AI content generation demo - integrate with /api/chat for real generation');
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Blog & AI Writer</h1>
        <p className="text-gray-400">Create and manage blog content with AI assistance.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Posts</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Published</p>
          <p className="text-2xl font-bold text-green-400">{stats.published}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Drafts</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.draft}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Views</p>
          <p className="text-2xl font-bold text-accent-400">{(stats.totalViews / 1000).toFixed(1)}K</p>
        </div>
      </div>

      {/* AI Content Generator */}
      <div className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">🤖 AI Content Generator</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="E.g., 'Write a blog post about sustainable web design'..."
            className="flex-1 bg-ink-800 border border-ink-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
          <button
            onClick={handleGenerateContent}
            disabled={isGenerating || !aiPrompt}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-ink-700 disabled:text-gray-500 text-white font-medium rounded-lg transition-colors"
          >
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'published', 'draft'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              statusFilter === status
                ? 'bg-brand-600 text-white'
                : 'bg-ink-800 text-gray-400 hover:bg-ink-700'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Posts List */}
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === 'published'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {post.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                    {post.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{post.excerpt}</p>
                <p className="text-sm text-brand-400 font-mono">/blog/{post.slug}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{(post.views / 1000).toFixed(1)}K</p>
                <p className="text-sm text-gray-400">Views</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-ink-700">
              <div>
                <p className="text-sm text-gray-400">Published</p>
                <p className="text-white">{new Date(post.publishDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Author</p>
                <p className="text-white">{post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
