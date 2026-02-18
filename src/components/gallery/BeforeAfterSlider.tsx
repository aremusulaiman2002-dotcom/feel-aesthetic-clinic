'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  treatmentName: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  treatmentName
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle movement
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    
    // Calculate position relative to container
    let x = clientX - rect.left
    
    // Constrain to container bounds
    x = Math.max(0, Math.min(x, rect.width))
    
    // Convert to percentage
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }, [])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    handleMove(e.clientX)
  }, [isDragging, handleMove])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }, [isDragging, handleMove])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Add/remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square bg-off-white border border-border rounded-2xl overflow-hidden select-none"
    >
      {/* Before Image (Full) */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-border z-10">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium z-10">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        ref={sliderRef}
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Handle Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/50 shadow-lg" />
        
        {/* Handle Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <div className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4 text-black" />
            <ChevronRight className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>

      {/* Treatment Label */}
      <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-border inline-block">
          {treatmentName}
        </span>
      </div>

      {/* Dragging Cursor Overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-transparent cursor-ew-resize" />
      )}
    </div>
  )
}