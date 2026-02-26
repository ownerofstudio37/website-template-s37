"use client";

import { mockClients } from "@/data/mock-clients";
import { useState } from "react";

export default function CRMPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredClients = selectedStatus === "all" 
    ? mockClients 
    : mockClients.filter(c => c.status === selectedStatus);

  const stats = {
    total: mockClients.length,
    active: mockClients.filter(c => c.status === "active").length,
    prospects: mockClients.filter(c => c.status === "prospect").length,
    totalValue: mockClients.reduce((sum, c) => sum + c.value, 0),
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">CRM</h1>
        <p className="text-white/60 mt-2">Manage client relationships and pipeline</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-6">
          <div className="text-white/60 text-sm">Total Clients</div>
          <div className="text-3xl font-bold mt-1">{stats.total}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Active</div>
          <div className="text-3xl font-bold mt-1 text-brand-500">{stats.active}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Prospects</div>
          <div className="text-3xl font-bold mt-1 text-accent-500">{stats.prospects}</div>
        </div>
        <div className="card p-6">
          <div className="text-white/60 text-sm">Total Value</div>
          <div className="text-3xl font-bold mt-1">${(stats.totalValue / 1000).toFixed(0)}K</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedStatus("all")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "all" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          All ({mockClients.length})
        </button>
        <button
          onClick={() => setSelectedStatus("active")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "active" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          Active ({stats.active})
        </button>
        <button
          onClick={() => setSelectedStatus("prospect")}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedStatus === "prospect" ? "bg-brand-500 text-white" : "bg-ink-800 text-white/60"
          }`}
        >
          Prospects ({stats.prospects})
        </button>
      </div>

      {/* Client List */}
      <div className="space-y-3">
        {filteredClients.map((client) => (
          <div key={client.id} className="card p-6 hover:border-brand-500/50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-semibold">
                    {client.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <div className="text-sm text-white/60">{client.company}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                  <div>
                    <div className="text-white/40 text-xs">Email</div>
                    <div className="text-white/80">{client.email}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Phone</div>
                    <div className="text-white/80">{client.phone}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Industry</div>
                    <div className="text-white/80">{client.industry}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Location</div>
                    <div className="text-white/80">{client.location}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-white/60">
                  {client.notes}
                </div>
              </div>
              <div className="text-right ml-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                  client.status === "active" ? "bg-brand-500/20 text-brand-400" :
                  client.status === "prospect" ? "bg-accent-500/20 text-accent-400" :
                  "bg-white/10 text-white/60"
                }`}>
                  {client.status}
                </div>
                <div className="text-2xl font-bold">${(client.value / 1000).toFixed(0)}K</div>
                <div className="text-xs text-white/40">Last contact: {client.lastContact}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
