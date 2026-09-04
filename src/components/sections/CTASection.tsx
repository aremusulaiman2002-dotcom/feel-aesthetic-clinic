import { Calendar, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="section bg-black text-white">
      <div className="container-narrow">
        <div className="max-w-4xl lg:max-w-5xl">
          <p className="text-sm font-medium text-primary mb-3 lg:mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight text-white">
            Book Your Consultation Today
          </h2>
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8 lg:mb-10">
            Take the first step toward natural, confident enhancement. Our nurse-led team is here to guide you every step of the way.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 mb-8 lg:mb-10">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <span className="block text-xs text-white/50">Online Booking</span>
                <Link href="/booking" className="font-medium text-white hover:text-primary transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <span className="block text-xs text-white/50">Email Inquiry</span>
                <a href="mailto:anuaminu7@gmail.com" className="font-medium text-white hover:text-primary transition-colors">
                  anuaminu7@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <span className="block text-xs text-white/50">Call Us</span>
                <a href="tel:+447576027243" className="font-medium text-white hover:text-primary transition-colors">
                  +44 7576 027243
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/booking"
            className="btn btn-primary-invert btn-lg inline-flex items-center gap-2 px-8 lg:px-10 mb-8 lg:mb-10"
          >
            <Calendar className="w-5 h-5" />
            Book Your Consultation
          </Link>

          {/* Important Note */}
          <div className="divider pt-6 lg:pt-8">
            <h4 className="font-bold text-white mb-2 lg:mb-3 text-base lg:text-lg">Important Information</h4>
            <ul className="text-sm lg:text-base text-white/70 space-y-1 leading-relaxed">
              <li>• All treatments require an initial consultation</li>
              <li>• Prescription treatments (Botox) require clinical assessment</li>
              <li>• 48-hour cancellation policy applies to all appointments</li>
              <li>• We recommend scheduling treatments 2 weeks before special events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
