'use client'

import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg md:text-xl">F</span>
            </div>
            <div>
              <div className="font-serif text-xl md:text-2xl font-bold tracking-tight text-black">
                Feel
              </div>
              <div className="text-xs tracking-widest text-light-gray">
                AESTHETIC CLINIC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-medium-gray hover:text-black transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="btn btn-primary btn-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Book Consultation</span>
              <span className="lg:hidden">Book</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-medium-gray hover:text-black transition-colors py-2 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="btn btn-primary btn-md mt-4 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}