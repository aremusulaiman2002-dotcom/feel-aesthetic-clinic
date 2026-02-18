'use client'

import { useState } from 'react'

interface GalleryFilterProps {
  categories: { id: string; name: string; count: number }[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function GalleryFilter({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
          activeCategory === 'all'
            ? 'bg-black text-white border-black'
            : 'bg-white text-dark-gray border-border hover:border-black hover:bg-off-white'
        }`}
      >
        All Results
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
            activeCategory === category.id
              ? 'bg-black text-white border-black'
              : 'bg-white text-dark-gray border-border hover:border-black hover:bg-off-white'
          }`}
        >
          <span>{category.name}</span>
          <span className={`ml-2 text-xs ${
            activeCategory === category.id ? 'text-white/80' : 'text-light-gray'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  )
}