'use client';

import { useState } from 'react';
import { mockProjects } from '@/data/mock-projects';

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredProjects = mockProjects.filter(project => {
    if (statusFilter === 'all') return true;
    return project.status === statusFilter;
  });

  const stats = {
    total: mockProjects.length,
    active: mockProjects.filter(p => p.status === 'in-progress').length,
    planning: mockProjects.filter(p => p.status === 'planning').length,
    completed: mockProjects.filter(p => p.status === 'completed').length,
    totalBudget: mockProjects.reduce((sum, p) => sum + p.budget, 0),
    totalTasks: mockProjects.reduce((sum, p) => sum + p.tasks.length, 0),
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Project Management</h1>
        <p className="text-gray-400">Track deliverables, timelines, and project milestones.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Projects</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Active</p>
          <p className="text-2xl font-bold text-brand-400">{stats.active}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Planning</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.planning}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Completed</p>
          <p className="text-2xl font-bold text-green-400">{stats.completed}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Budget</p>
          <p className="text-2xl font-bold text-accent-400">${(stats.totalBudget / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Tasks</p>
          <p className="text-2xl font-bold text-purple-400">{stats.totalTasks}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'planning', 'in-progress', 'review', 'completed'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              statusFilter === status
                ? 'bg-brand-600 text-white'
                : 'bg-ink-800 text-gray-400 hover:bg-ink-700'
            }`}
          >
            {status === 'in-progress' ? 'Active' : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'in-progress' ? 'bg-brand-500/20 text-brand-300' :
                    project.status === 'planning' ? 'bg-yellow-500/20 text-yellow-300' :
                    project.status === 'review' ? 'bg-purple-500/20 text-purple-300' :
                    project.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                  {project.priority === 'high' && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-300">
                      High Priority
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{project.client}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">${(project.budget / 1000).toFixed(0)}K</p>
                <p className="text-sm text-gray-400">Budget</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-white font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-ink-700 rounded-full h-2">
                <div
                  className="bg-brand-500 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400">Start Date</p>
                <p className="text-white">{new Date(project.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Due Date</p>
                <p className="text-white">{new Date(project.dueDate).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Tasks */}
            <div className="mt-4 pt-4 border-t border-ink-700">
              <p className="text-sm font-medium text-gray-300 mb-3">
                Tasks ({project.tasks.filter(t => t.status === 'done').length}/{project.tasks.length} completed)
              </p>
              <div className="space-y-2">
                {project.tasks.map(task => (
                  <div key={task.id} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      task.status === 'done' ? 'bg-green-500 border-green-500' :
                      task.status === 'in-progress' ? 'bg-brand-500/20 border-brand-500' :
                      'border-gray-600'
                    }`}>
                      {task.status === 'done' && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`flex-1 text-sm ${
                      task.status === 'done' ? 'text-gray-500 line-through' : 'text-gray-300'
                    }`}>
                      {task.title}
                    </span>
                    <span className="text-xs text-gray-500">{task.assignee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
