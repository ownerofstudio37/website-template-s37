'use client';

import { useState } from 'react';

const mockMigrationData = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    oldUrl: 'wordpress.com/blog/getting-started-web-dev',
    newSlug: 'getting-started-web-development',
    status: 'ready',
    redirectStatus: 'configured',
  },
  {
    id: '2',
    title: '10 Design Trends for 2024',
    oldUrl: 'medium.com/@user/design-trends-2024',
    newSlug: '10-design-trends-2024',
    status: 'ready',
    redirectStatus: 'configured',
  },
  {
    id: '3',
    title: 'Advanced React Patterns',
    oldUrl: 'dev.to/user/advanced-react-patterns',
    newSlug: 'advanced-react-patterns',
    status: 'pending',
    redirectStatus: 'pending',
  },
];

export default function BlogMigratePage() {
  const [migrationStatus, setMigrationStatus] = useState<string>('idle');

  const handleStartMigration = () => {
    setMigrationStatus('processing');
    setTimeout(() => {
      setMigrationStatus('complete');
    }, 3000);
  };

  return (
    <div className="section-pad">
      <div className="max-w-6xl">
        <h1 className="text-3xl font-semibold md:text-4xl text-white">
          Blog Migration Center
        </h1>
        <p className="mt-3 text-white/70">
          Import existing blogs without losing SEO rankings. Map legacy URLs,
          preserve metadata, and validate redirects before you publish.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Total Posts</p>
            <p className="text-2xl font-bold text-white">{mockMigrationData.length}</p>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Ready</p>
            <p className="text-2xl font-bold text-green-400">
              {mockMigrationData.filter(p => p.status === 'ready').length}
            </p>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-400">
              {mockMigrationData.filter(p => p.status === 'pending').length}
            </p>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Redirects</p>
            <p className="text-2xl font-bold text-brand-400">
              {mockMigrationData.filter(p => p.redirectStatus === 'configured').length}
            </p>
          </div>
        </div>

        {/* Migration Controls */}
        <div className="mt-8 bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">🚀 Migration Control Panel</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleStartMigration}
              disabled={migrationStatus === 'processing'}
              className="px-6 py-3 bg-brand-600 hover:bg-brand-700 disabled:bg-ink-700 disabled:text-gray-500 text-white font-medium rounded-lg transition-colors"
            >
              {migrationStatus === 'idle' && 'Start Migration'}
              {migrationStatus === 'processing' && 'Migrating...'}
              {migrationStatus === 'complete' && '✓ Migration Complete'}
            </button>
            <button className="px-6 py-3 bg-ink-700 hover:bg-ink-600 text-white font-medium rounded-lg transition-colors">
              Upload CSV/JSON
            </button>
            <button className="px-6 py-3 bg-ink-700 hover:bg-ink-600 text-white font-medium rounded-lg transition-colors">
              Configure Redirects
            </button>
          </div>
        </div>

        {/* Migration Items */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-white">Posts to Migrate</h2>
          {mockMigrationData.map(item => (
            <div
              key={item.id}
              className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'ready'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Old URL:</span>
                      <span className="text-sm text-gray-300 font-mono">{item.oldUrl}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">New URL:</span>
                      <span className="text-sm text-brand-400 font-mono">/blog/{item.newSlug}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.redirectStatus === 'configured'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {item.redirectStatus === 'configured' ? '✓ 301 Redirect' : 'Redirect Pending'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white">Migration Checklist</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Upload CSV or JSON of legacy posts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Match slugs to new entries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Preserve canonical URLs and metadata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>Configure redirects and verify with preview</span>
              </li>
            </ul>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white">SEO Safety</h2>
            <p className="mt-3 text-sm text-gray-300">
              The migration tool automatically preserves legacy URLs, generates
              301 redirects, and validates structured data to maintain your SEO rankings.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Automatic 301 redirect generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Meta description preservation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Canonical URL mapping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
