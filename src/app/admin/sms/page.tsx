'use client';

import { useState } from 'react';
import { mockSMSCampaigns } from '@/data/mock-marketing';

export default function SmsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredCampaigns = mockSMSCampaigns.filter(campaign => {
    if (statusFilter === 'all') return true;
    return campaign.status === statusFilter;
  });

  const stats = {
    total: mockSMSCampaigns.length,
    sent: mockSMSCampaigns.filter(c => c.status === 'sent').length,
    scheduled: mockSMSCampaigns.filter(c => c.status === 'scheduled').length,
    avgReplyRate: mockSMSCampaigns.reduce((sum, c) => sum + c.replyRate, 0) / mockSMSCampaigns.length,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">SMS Campaigns</h1>
        <p className="text-gray-400">Send high-touch SMS reminders and updates.</p>
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
          <p className="text-sm text-gray-400 mb-1">Avg Reply Rate</p>
          <p className="text-2xl font-bold text-accent-400">{stats.avgReplyRate.toFixed(0)}%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'sent', 'scheduled'].map(status => (
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

      {/* SMS Campaigns List */}
      <div className="space-y-4">
        {filteredCampaigns.map(campaign => (
          <div
            key={campaign.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-white">{campaign.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'sent' ? 'bg-green-500/20 text-green-300' :
                    'bg-brand-500/20 text-brand-300'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                
                {/* Message Preview */}
                <div className="bg-ink-700 border border-ink-600 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm font-mono">{campaign.message}</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-400">Recipients</p>
                <p className="text-white font-semibold">{campaign.recipients.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Delivered</p>
                <p className="text-green-400 font-semibold">{campaign.deliveryRate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Reply Rate</p>
                <p className="text-brand-400 font-semibold">{campaign.replyRate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Send Date</p>
                <p className="text-white">{new Date(campaign.sendDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
