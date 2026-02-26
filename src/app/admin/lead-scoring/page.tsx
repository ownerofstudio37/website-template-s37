"use client";

import { mockLeads } from "@/data/mock-leads";
import { useState } from "react";

export default function LeadScoringPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredLeads = selectedStatus === "all" 
    ? mockLeads 
    : mockLeads.filter(l => l.status === selectedStatus);

  const sortedLeads = [...filteredLeads].sort((a, b) => b.score - a.score);

  const stats = {
    total: mockLeads.length,
    hot: mockLeads.filter(l => l.score >= 80).length,
    warm: mockLeads.filter(l => l.score >= 60 && l.score < 80).length,
    cold: mockLeads.filter(l => l.score < 60).length,
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500/20";
    if (score >= 60) return "bg-yellow-500/20";
    return "bg-red-500/20";
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">AI Lead Scoring</h1>
        <p className="text-white/60 mt-2">Gemini-powered lead qualification and insights</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-6">
          <div className="text-white/60 text-sm">Total Leads</div>
          <div className="text-3xl font-bold mt-1">{stats.total}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Hot Leads (80+)</div>
          <div className="text-3xl font-bold mt-1 text-green-400">{stats.hot}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Warm (60-79)</div>
          <div className="text-3xl font-bold mt-1 text-yellow-400">{stats.warm}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Cold (&lt;60)</div>
          <div className="text-3xl font-bold mt-1 text-red-400">{stats.cold}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedStatus("all")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "all" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedStatus("new")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "new" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          New
        </button>
        <button
          onClick={() => setSelectedStatus("qualified")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "qualified" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          Qualified
        </button>
        <button
          onClick={() => setSelectedStatus("proposal")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "proposal" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          Proposal
        </button>
        <button
          onClick={() => setSelectedStatus("negotiation")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "negotiation" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          Negotiation
        </button>
      </div>

      {/* Lead List */}
      <div className="space-y-3">
        {sortedLeads.map((lead) => (
          <div key={lead.id} className="card p-6 hover:border-brand-500/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-lg">{lead.name}</h3>
                  <span className={`text-2xl font-bold ${getScoreColor(lead.score)}`}>
                    {lead.score}
                  </span>
                </div>
                <div className="text-sm text-white/60">{lead.company}</div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getScoreBg(lead.score)} ${getScoreColor(lead.score)}`}>
                  {lead.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60">
                  {lead.source}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
              <div>
                <div className="text-white/40 text-xs">Email</div>
                <div className="text-white/80">{lead.email}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs">Phone</div>
                <div className="text-white/80">{lead.phone}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs">Value</div>
                <div className="text-white/80">${(lead.value / 1000).toFixed(0)}K</div>
              </div>
              <div>
                <div className="text-white/40 text-xs">Assigned To</div>
                <div className="text-white/80">{lead.assignedTo}</div>
              </div>
            </div>

            {lead.aiInsights && (
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex items-start gap-2">
                  <div className="text-accent-500 text-sm font-medium">🤖 AI Insights:</div>
                  <div className="text-sm text-white/70">{lead.aiInsights}</div>
                </div>
              </div>
            )}

            <div className="text-xs text-white/40 mt-3">
              Created: {lead.createdDate} • Last activity: {lead.lastActivity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
