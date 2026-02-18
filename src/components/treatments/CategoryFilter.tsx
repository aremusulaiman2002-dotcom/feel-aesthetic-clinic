'use client'

import { useState } from 'react'
import { categories } from '@/data/treatments'
import { Sparkles, Zap, Droplet, Activity, Syringe, Droplets, Flame, Leaf, Gift } from 'lucide-react'

const categoryIcons: Record<string, React.ReactNode> = {
  'Sparkles': <Sparkles className="w-4 h-4" />,
  'Zap': <Zap className="w-4 h-4" />,
  'Droplet': <Droplet className="w-4 h-4" />,
  'Activity': <Activity className="w-4 h-4" />,
  'Syringe': <Syringe className="w-4 h-4" />,
  'Droplets': <Droplets className="w-4 h-4" />,
  'Flame': <Flame className="w-4 h-4" />,
  'Leaf': <Leaf className="w-4 h-4" />,
  'Gift': <Gift className="w-4 h-4" />
}

interface CategoryFilterProps {
  selectedCategory?: string
  onSelectCategory: (categoryId: string) => void
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory('all')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-medium ${
          selectedCategory === 'all' || !selectedCategory
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-text-secondary border-border hover:border-primary/50 hover:bg-primary/5'
        }`}
      >
        All Treatments
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-medium ${
            selectedCategory === category.id
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-text-secondary border-border hover:border-primary/50 hover:bg-primary/5'
          }`}
        >
          {categoryIcons[category.icon]}
          <span>{category.name}</span>
          <span className={`text-xs ${
            selectedCategory === category.id ? 'text-white/80' : 'text-text-light'
          }`}>
            ({category.count})
          </span>
        </button>
      ))}
    </div>
  )
}