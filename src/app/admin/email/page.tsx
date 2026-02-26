'use client';

import { useState } from 'react';
import { mockEmailCampaigns } from '@/data/mock-marketing';

export default function EmailPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredCampaigns = mockEmailCampaigns.filter(campaign => {
    if (statusFilter === 'all') return true;
    return campaign.status === statusFilter;
  });

  const stats = {
    total: mockEmailCampaigns.length,
    sent: mockEmailCampaigns.filter(c => c.status === 'sent').length,
    scheduled: mockEmailCampaigns.filter(c => c.status === 'scheduled').length,
    avgOpenRate: mockEmailCampaigns.reduce((sum, c) => sum + c.openRate, 0) / mockEmailCampaigns.length,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Email Campaigns</h1>
        <p className="text-gray-400">Create and manage email marketing campaigns.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Campaigns</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Sent</p>
          <p className="text-2xl font-bold text-green-400">{stats.sent}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Scheduled</p>
          <p className="text-2xl font-bold text-brand-400">{stats.scheduled}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Avg Open Rate</p>
          <p className="text-2xl font-bold text-accent-400">{stats.avgOpenRate.toFixed(0)}%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'sent', 'scheduled', 'draft'].map(status => (
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

      {/* Campaigns List */}
      <div className="space-y-4">
        {filteredCampaigns.map(campaign => (
          <div
            key={campaign.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{campaign.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'sent' ? 'bg-green-500/20 text-green-300' :
                    campaign.status === 'scheduled' ? 'bg-brand-500/20 text-brand-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{campaign.subject}</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400">Recipients</p>
                <p className="text-white font-semibold">{campaign.recipients.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Open Rate</p>
                <p className={`font-semibold ${
                  campaign.openRate > 70 ? 'text-green-400' :
                  campaign.openRate > 40 ? 'text-yellow-400' :
                  'text-gray-400'
                }`}>
                  {campaign.openRate}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Click Rate</p>
                <p className="text-brand-400 font-semibold">{campaign.clickRate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Send Date</p>
                <p className="text-white">{new Date(campaign.sendDate).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Progress Bar for Open Rate */}
            <div>
              <div className="w-full bg-ink-700 rounded-full h-2">
                <div
                  className="bg-brand-500 h-2 rounded-full transition-all"
                  style={{ width: `${campaign.openRate}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
