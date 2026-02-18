import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Medical Disclaimer', href: '/medical-disclaimer' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-narrow">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl md:text-2xl">F</span>
                </div>
                <div>
                  <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Feel</div>
                  <div className="text-xs md:text-sm tracking-widest text-text-light">AESTHETIC CLINIC</div>
                </div>
              </div>
              <p className="text-text-secondary mb-6 text-sm md:text-base">
                Nurse-led aesthetic clinic specializing in natural, subtle enhancements that refresh and restore confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-text-light hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-text-light hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Us</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary text-sm md:text-base">1 Great Carleton Square, Edinburgh, Eh16 4tw, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <a href="tel:+447576027243" className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base">
                    +44 7576 027243
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <a href="mailto:anuaminu7@gmail.com" className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base">
                    anuaminu7@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6">Legal</h3>
              <ul className="space-y-2 md:space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors text-sm md:text-base block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6 text-center">
          <p className="text-text-light text-xs md:text-sm">
            © {new Date().getFullYear()} Feel Aesthetic Clinic. All rights reserved.
          </p>
          <p className="text-text-light text-xs md:text-sm mt-1">
            A nurse-led aesthetic clinic focusing on natural, subtle enhancements.
          </p>
        </div>
      </div>
    </footer>
  )
}