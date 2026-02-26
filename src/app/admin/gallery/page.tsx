'use client';

import { useState } from 'react';
import { mockGalleryImages } from '@/data/mock-content';
import Image from 'next/image';

export default function GalleryPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredImages = mockGalleryImages.filter(img => {
    if (categoryFilter === 'all') return true;
    return img.category === categoryFilter;
  });

  const categories = Array.from(new Set(mockGalleryImages.map(img => img.category)));

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Gallery Manager</h1>
        <p className="text-gray-400">Organize and showcase your portfolio and case studies.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Images</p>
          <p className="text-2xl font-bold text-white">{mockGalleryImages.length}</p>
        </div>
        {categories.map(cat => (
          <div key={cat} className="bg-ink-800 border border-ink-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">{cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
            <p className="text-2xl font-bold text-brand-400">
              {mockGalleryImages.filter(img => img.category === cat).length}
            </p>
          </div>
        ))}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="bg-ink-800 border border-ink-700 rounded-lg overflow-hidden hover:border-brand-500 transition-colors group"
          >
            <div className="relative h-64 bg-ink-700">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{image.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{image.description}</p>
              <div className="flex flex-wrap gap-2">
                {image.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-brand-500/20 text-brand-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
