'use client';

import { useState } from 'react';
import { mockAppointments } from '@/data/mock-appointments';

export default function CalendarPage() {
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredAppointments = mockAppointments.filter(apt => {
    if (typeFilter === 'all') return true;
    return apt.type === typeFilter;
  });

  const stats = {
    total: mockAppointments.length,
    upcoming: mockAppointments.filter(a => new Date(a.startTime) > new Date()).length,
    today: mockAppointments.filter(a => {
      const aptDate = new Date(a.startTime).toDateString();
      const today = new Date().toDateString();
      return aptDate === today;
    }).length,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Calendar & Booking</h1>
        <p className="text-gray-400">Manage appointments, availability, and scheduling.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Appointments</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Upcoming</p>
          <p className="text-2xl font-bold text-brand-400">{stats.upcoming}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Today</p>
          <p className="text-2xl font-bold text-accent-400">{stats.today}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'consultation', 'meeting', 'call', 'demo', 'review'].map(type => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              typeFilter === type
                ? 'bg-brand-600 text-white'
                : 'bg-ink-800 text-gray-400 hover:bg-ink-700'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map(appointment => {
          const aptDate = new Date(appointment.startTime);
          const isPast = aptDate < new Date();
          
          return (
            <div
              key={appointment.id}
              className={`bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors ${
                isPast ? 'opacity-60' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{appointment.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.type === 'consultation' ? 'bg-purple-500/20 text-purple-300' :
                      appointment.type === 'meeting' ? 'bg-blue-500/20 text-blue-300' :
                      appointment.type === 'call' ? 'bg-green-500/20 text-green-300' :
                      appointment.type === 'demo' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-pink-500/20 text-pink-300'
                    }`}>
                      {appointment.type}
                    </span>
                    {isPast && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{appointment.client}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="text-white font-medium">{aptDate.toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Time</p>
                      <p className="text-white font-medium">
                        {aptDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">{appointment.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
