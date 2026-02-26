'use client';

import { mockPerformanceMetrics } from '@/data/mock-performance';

export default function PerformancePage() {
  const currentMetric = mockPerformanceMetrics[0];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Performance Auditing</h1>
        <p className="text-gray-400">Monitor site speed, Core Web Vitals, and optimization opportunities.</p>
      </div>

      {/* Lighthouse Scores */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Performance', score: currentMetric.performanceScore, color: 'text-yellow-400' },
          { label: 'Accessibility', score: currentMetric.accessibilityScore, color: 'text-green-400' },
          { label: 'Best Practices', score: currentMetric.bestPracticesScore, color: 'text-green-400' },
          { label: 'SEO', score: currentMetric.seoScore, color: 'text-brand-400' },
        ].map(metric => (
          <div key={metric.label} className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
            <p className={`text-3xl font-bold ${metric.color}`}>{metric.score}</p>
            <div className="w-full bg-ink-700 rounded-full h-2 mt-3">
              <div
                className={`h-2 rounded-full ${
                  metric.score >= 90 ? 'bg-green-500' :
                  metric.score >= 50 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${metric.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Core Web Vitals */}
      <div className="bg-ink-800 border border-ink-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Core Web Vitals</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-400 mb-2">First Contentful Paint</p>
            <p className="text-2xl font-bold text-green-400">{(currentMetric.fcp / 1000).toFixed(1)}s</p>
            <p className="text-xs text-gray-500 mt-1">Good (&lt; 1.8s)</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Largest Contentful Paint</p>
            <p className="text-2xl font-bold text-yellow-400">{(currentMetric.lcp / 1000).toFixed(1)}s</p>
            <p className="text-xs text-gray-500 mt-1">Needs improvement (2.5-4.0s)</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Cumulative Layout Shift</p>
            <p className="text-2xl font-bold text-green-400">{currentMetric.cls.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">Good (&lt; 0.1)</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Time to Interactive</p>
            <p className="text-2xl font-bold text-green-400">{(currentMetric.tti / 1000).toFixed(1)}s</p>
            <p className="text-xs text-gray-500 mt-1">Good (&lt; 3.8s)</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">💡 Optimization Recommendations</h2>
        <div className="space-y-3">
          {currentMetric.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">⚠</span>
              <p className="text-white">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
