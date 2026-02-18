'use client'

import { useState } from 'react'
import { GalleryFilter } from './GalleryFilter'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { X, ZoomIn } from 'lucide-react'

interface GalleryItem {
  id: number
  beforeImage: string
  afterImage: string
  treatmentName: string
  category: string
  categoryName: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  categories: { id: string; name: string; count: number }[]
}

// Placeholder images for development
const PLACEHOLDER_BEFORE = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23F5F5F5\'/%3E%3Ctext x=\'50\' y=\'200\' font-family=\'Arial\' font-size=\'20\' fill=\'%235A5A5A\'%3EBefore Image%3C/text%3E%3C/svg%3E'
const PLACEHOLDER_AFTER = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Crect width=\'400\' height=\'400\' fill=\'%23E5E5E5\'/%3E%3Ctext x=\'50\' y=\'200\' font-family=\'Arial\' font-size=\'20\' fill=\'%232C2C2C\'%3EAfter Image%3C/text%3E%3C/svg%3E'

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Filter Bar */}
      <div className="mb-10 lg:mb-12">
        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-medium-gray">No images found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-square bg-off-white border border-border rounded-2xl overflow-hidden hover:border-black transition-all duration-300">
                {/* Split Preview */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.beforeImage || PLACEHOLDER_BEFORE})` }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-border">
                    Before
                  </div>
                </div>
                <div 
                  className="absolute inset-0 overflow-hidden border-r-2 border-white"
                  style={{ width: '50%' }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.afterImage || PLACEHOLDER_AFTER})` }}
                  />
                  <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 rounded-full text-xs">
                    After
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Treatment Label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-border inline-block">
                    {item.treatmentName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Before/After Slider */}
            <BeforeAfterSlider
              beforeImage={selectedItem.beforeImage || PLACEHOLDER_BEFORE}
              afterImage={selectedItem.afterImage || PLACEHOLDER_AFTER}
              treatmentName={selectedItem.treatmentName}
            />

            {/* Caption */}
            <div className="mt-4 text-center text-white/80 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">
                {selectedItem.treatmentName} · {selectedItem.categoryName}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}