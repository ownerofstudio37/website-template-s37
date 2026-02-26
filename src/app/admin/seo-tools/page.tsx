'use client';

import { mockSEOData } from '@/data/mock-performance';

export default function SeoToolsPage() {
  const currentSite = mockSEOData[0];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">AI SEO Tools</h1>
        <p className="text-gray-400">Monitor rankings, optimize content, and track organic performance.</p>
      </div>

      {/* SEO Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Domain Authority</p>
          <p className="text-2xl font-bold text-white">{currentSite.domainAuthority}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Keywords</p>
          <p className="text-2xl font-bold text-brand-400">{currentSite.keywords.length}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Backlinks</p>
          <p className="text-2xl font-bold text-accent-400">{currentSite.backlinks}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Page Speed</p>
          <p className="text-2xl font-bold text-green-400">{currentSite.pageSpeed}</p>
        </div>
      </div>

      {/* Keyword Rankings */}
      <div className="bg-ink-800 border border-ink-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Keyword Rankings</h2>
        <div className="space-y-3">
          {currentSite.keywords.map((keyword, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-ink-700 rounded-lg hover:bg-ink-600 transition-colors"
            >
              <div className="flex-1">
                <p className="text-white font-medium">{keyword.keyword}</p>
                <p className="text-sm text-gray-400">{keyword.volume.toLocaleString()} monthly searches</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Change</p>
                  <p className={`font-semibold ${
                    keyword.change > 0 ? 'text-green-400' :
                    keyword.change < 0 ? 'text-red-400' :
                    'text-gray-400'
                  }`}>
                    {keyword.change > 0 ? '+' : ''}{keyword.change}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Position</p>
                  <p className={`text-2xl font-bold ${
                    keyword.position <= 3 ? 'text-green-400' :
                    keyword.position <= 10 ? 'text-yellow-400' :
                    'text-gray-400'
                  }`}>
                    #{keyword.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Insights */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🎯 SEO Insights</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <div>
              <p className="text-white font-medium">Strong Domain Authority ({currentSite.domainAuthority})</p>
              <p className="text-sm text-gray-400">Your site has good trust signals. Focus on building quality backlinks.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-1">!</span>
            <div>
              <p className="text-white font-medium">Opportunity: &ldquo;{currentSite.keywords[currentSite.keywords.length-1].keyword}&rdquo; ranking #{currentSite.keywords[currentSite.keywords.length-1].position}</p>
              <p className="text-sm text-gray-400">Create more content around this topic to reach page 1.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <div>
              <p className="text-white font-medium">Top rankings for &ldquo;{currentSite.keywords[0].keyword}&rdquo;</p>
              <p className="text-sm text-gray-400">Maintain this position with regular content updates.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
