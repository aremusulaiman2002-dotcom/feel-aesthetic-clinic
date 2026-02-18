import { Calendar, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="section bg-gradient-to-b from-background to-secondary">
      <div className="container-narrow">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="p-6 lg:p-8 xl:p-12">
              <div className="text-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-3 lg:mb-4">
                  <Calendar className="w-4 h-4" />
                  Ready to Begin?
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                  Book Your Consultation Today
                </h2>
                <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                  Take the first step toward natural, confident enhancement. Our nurse-led team is here to guide you every step of the way.
                </p>
              </div>

              {/* CTA Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="text-center p-4 lg:p-5 xl:p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3 lg:mb-4">
                    <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-bold text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">Online Booking</h3>
                  <p className="text-text-secondary text-xs lg:text-sm xl:text-base mb-3 lg:mb-4 leading-relaxed">
                    Book your consultation directly through our secure online system
                  </p>
                  <Link 
                    href="/booking" 
                    className="btn btn-primary btn-sm lg:btn-md w-full"
                  >
                    Book Now
                  </Link>
                </div>

                <div className="text-center p-4 lg:p-5 xl:p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3 lg:mb-4">
                    <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-bold text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">Email Inquiry</h3>
                  <p className="text-text-secondary text-xs lg:text-sm xl:text-base mb-3 lg:mb-4 leading-relaxed">
                    Have questions? Our team will respond within 24 hours
                  </p>
                  <a 
                    href="mailto:anuaminu7@gmail.com" 
                    className="btn btn-outline btn-sm lg:btn-md w-full"
                  >
                    Email Us
                  </a>
                </div>

                <div className="text-center p-4 lg:p-5 xl:p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-3 lg:mb-4">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-bold text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">Call Us</h3>
                  <p className="text-text-secondary text-xs lg:text-sm xl:text-base mb-3 lg:mb-4 leading-relaxed">
                    Speak directly with our clinic team during business hours
                  </p>
                  <a 
                    href="tel:+447576027243" 
                    className="btn btn-outline btn-sm lg:btn-md w-full"
                  >
                    +44 7576 027243
                  </a>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-secondary/50 rounded-xl p-4 lg:p-5 xl:p-6 border border-border">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs lg:text-sm font-bold">i</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 lg:mb-2 text-base lg:text-lg xl:text-xl">Important Information</h4>
                    <ul className="text-xs lg:text-sm xl:text-base text-text-secondary space-y-1 leading-relaxed">
                      <li>• All treatments require an initial consultation</li>
                      <li>• Prescription treatments (Botox) require clinical assessment</li>
                      <li>• 48-hour cancellation policy applies to all appointments</li>
                      <li>• We recommend scheduling treatments 2 weeks before special events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}