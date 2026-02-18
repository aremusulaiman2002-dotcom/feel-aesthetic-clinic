'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'

interface TreatmentFilterProps {
  categories: { id: string; name: string; count: number; icon?: React.ReactNode }[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function TreatmentFilter({ categories, activeCategory, onCategoryChange }: TreatmentFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Find active category name
  const activeCategoryName = activeCategory === 'all' 
    ? 'All Treatments' 
    : categories.find(c => c.id === activeCategory)?.name || 'All Treatments'

  return (
    <div className="w-full">
      {/* Mobile Dropdown (hidden on desktop) */}
      <div className="lg:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-3 bg-white border border-border rounded-xl text-dark-gray hover:border-black transition-colors"
        >
          <span className="font-medium">{activeCategoryName}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in">
            <button
              onClick={() => {
                onCategoryChange('all')
                setIsOpen(false)
              }}
              className={`w-full text-left px-5 py-3 hover:bg-off-white transition-colors ${
                activeCategory === 'all' ? 'bg-black text-white hover:bg-black' : 'text-dark-gray'
              }`}
            >
              <span className="font-medium">All Treatments</span>
              <span className="ml-2 text-sm text-light-gray">
                ({categories.reduce((acc, cat) => acc + cat.count, 0)})
              </span>
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-5 py-3 hover:bg-off-white transition-colors flex items-center justify-between ${
                  activeCategory === category.id ? 'bg-black text-white hover:bg-black' : 'text-dark-gray'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm ${
                  activeCategory === category.id ? 'text-white/80' : 'text-light-gray'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Horizontal Scroll (hidden on mobile) */}
      <div className="hidden lg:block relative">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        
        {/* Scrollable Container */}
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex items-center gap-2 min-w-max px-2">
            {/* All Treatments Button */}
            <button
              onClick={() => onCategoryChange('all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-dark-gray border-border hover:border-black hover:bg-off-white'
              }`}
            >
              <span>All Treatments</span>
              <span className={`text-xs ${
                activeCategory === 'all' ? 'text-white/80' : 'text-light-gray'
              }`}>
                ({categories.reduce((acc, cat) => acc + cat.count, 0)})
              </span>
            </button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-dark-gray border-border hover:border-black hover:bg-off-white'
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                <span>{category.name}</span>
                <span className={`text-xs ${
                  activeCategory === category.id ? 'text-white/80' : 'text-light-gray'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters (Optional) */}
      {activeCategory !== 'all' && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-light-gray">Active filter:</span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-off-white border border-border rounded-full text-sm">
            <span className="text-dark-gray font-medium">{activeCategoryName}</span>
            <button
              onClick={() => onCategoryChange('all')}
              className="ml-1 p-0.5 hover:bg-white rounded-full transition-colors"
            >
              <X className="w-3.5 h-3.5 text-medium-gray" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}