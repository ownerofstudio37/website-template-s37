'use client';

import { useState } from 'react';
import { mockPortalUsers } from '@/data/mock-marketing';

export default function ClientPortalsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredUsers = mockPortalUsers.filter(user => {
    if (statusFilter === 'all') return true;
    return user.status === statusFilter;
  });

  const stats = {
    total: mockPortalUsers.length,
    active: mockPortalUsers.filter(u => u.status === 'active').length,
    inactive: mockPortalUsers.filter(u => u.status === 'inactive').length,
    totalLogins: mockPortalUsers.reduce((sum, u) => sum + u.loginCount, 0),
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Client Portals</h1>
        <p className="text-gray-400">Manage client access to private workspaces and resources.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Users</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Active</p>
          <p className="text-2xl font-bold text-green-400">{stats.active}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Inactive</p>
          <p className="text-2xl font-bold text-gray-400">{stats.inactive}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Logins</p>
          <p className="text-2xl font-bold text-brand-400">{stats.totalLogins}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'active', 'inactive'].map(status => (
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

      {/* Portal Users List */}
      <div className="space-y-4">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.company}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ink-700">
              <div>
                <p className="text-sm text-gray-400">Created</p>
                <p className="text-white">{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Last Login</p>
                <p className="text-white">{new Date(user.lastLogin).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Logins</p>
                <p className="text-white">{user.loginCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
