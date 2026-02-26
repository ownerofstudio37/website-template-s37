'use client';

import { useState } from 'react';
import { mockCMSPages } from '@/data/mock-content';

export default function CMSPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredPages = mockCMSPages.filter(page => {
    if (statusFilter === 'all') return true;
    return page.status === statusFilter;
  });

  const stats = {
    total: mockCMSPages.length,
    published: mockCMSPages.filter(p => p.status === 'published').length,
    draft: mockCMSPages.filter(p => p.status === 'draft').length,
    totalViews: mockCMSPages.reduce((sum, p) => sum + p.views, 0),
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">CMS & Page Builder</h1>
        <p className="text-gray-400">Create and manage website pages with AI-powered content.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Pages</p>
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

      {/* Pages List */}
      <div className="space-y-4">
        {filteredPages.map(page => (
          <div
            key={page.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{page.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    page.status === 'published'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {page.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{page.description}</p>
                <p className="text-sm text-brand-400 font-mono">/{page.slug}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{(page.views / 1000).toFixed(1)}K</p>
                <p className="text-sm text-gray-400">Views</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ink-700">
              <div>
                <p className="text-sm text-gray-400">Created</p>
                <p className="text-white">{new Date(page.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Last Modified</p>
                <p className="text-white">{new Date(page.updatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Author</p>
                <p className="text-white">{page.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
