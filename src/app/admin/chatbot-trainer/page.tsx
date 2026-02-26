'use client';

import { useState } from 'react';

const mockKnowledgeBase = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer: 'We offer full-service web design, development, SEO optimization, and digital marketing solutions.',
    category: 'Services',
    confidence: 95,
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Most web projects take 4-8 weeks from kickoff to launch, depending on complexity and requirements.',
    category: 'Timeline',
    confidence: 88,
  },
  {
    id: '3',
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on project scope. We offer custom quotes after a discovery call. Typical projects range from $5K-$50K.',
    category: 'Pricing',
    confidence: 92,
  },
  {
    id: '4',
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer maintenance packages starting at $500/month including updates, security patches, and technical support.',
    category: 'Support',
    confidence: 90,
  },
];

export default function ChatbotTrainerPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [testQuestion, setTestQuestion] = useState('');

  const filteredKB = mockKnowledgeBase.filter(item => {
    if (categoryFilter === 'all') return true;
    return item.category === categoryFilter;
  });

  const categories = Array.from(new Set(mockKnowledgeBase.map(item => item.category)));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Chatbot Trainer</h1>
        <p className="text-gray-400">Train your AI chatbot with knowledge base articles and FAQs.</p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Articles</p>
          <p className="text-2xl font-bold text-white">{mockKnowledgeBase.length}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Categories</p>
          <p className="text-2xl font-bold text-brand-400">{categories.length}</p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Avg Confidence</p>
          <p className="text-2xl font-bold text-green-400">
            {Math.round(mockKnowledgeBase.reduce((sum, item) => sum + item.confidence, 0) / mockKnowledgeBase.length)}%
          </p>
        </div>
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Model</p>
          <p className="text-lg font-bold text-accent-400">Gemini 2.5</p>
        </div>
      </div>

      {/* Test Interface */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">🧪 Test Chatbot Response</h2>
        <div className="flex gap-3">
          <input
            type="text"
            value={testQuestion}
            onChange={(e) => setTestQuestion(e.target.value)}
            placeholder="Ask a question to test the chatbot..."
            className="flex-1 bg-ink-800 border border-ink-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
          <button
            onClick={() => alert('Test chatbot by visiting the homepage chat widget!')}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors"
          >
            Test
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', ...categories].map(category => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              categoryFilter === category
                ? 'bg-brand-600 text-white'
                : 'bg-ink-800 text-gray-400 hover:bg-ink-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Knowledge Base Articles */}
      <div className="space-y-4">
        {filteredKB.map(item => (
          <div
            key={item.id}
            className="bg-ink-800 border border-ink-700 rounded-lg p-6 hover:border-brand-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{item.answer}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-ink-700">
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-2">Confidence Score</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-ink-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.confidence >= 90 ? 'bg-green-500' :
                        item.confidence >= 70 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${item.confidence}%` }}
                    />
                  </div>
                  <span className="text-white font-semibold">{item.confidence}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
