import { BookingForm } from '@/components/booking/BookingForm'
import { Calendar, Clock, Shield, Users, Phone, Mail, MapPin, AlertCircle } from 'lucide-react'

export default function BookingPage() {
  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Request Consultation
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Book Your Consultation
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Begin your journey to natural enhancement with a comprehensive consultation. 
              Our nurse-led team will assess your goals and create a personalized treatment plan.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form Column - 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-border p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-6 lg:mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">Consultation Request Form</h2>
                  <p className="text-text-secondary">
                    Please complete the form below. Our team will contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
                <BookingForm />
              </div>
            </div>

            {/* Info Column - 1/3 width on desktop */}
            <div className="space-y-6">
              {/* Consultation Process */}
              <div className="bg-background rounded-2xl border-2 border-border p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  Consultation Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <div>
                      <span className="font-medium text-text-primary">Submit Request</span>
                      <p className="text-sm text-text-secondary">Fill in your details and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <div>
                      <span className="font-medium text-text-primary">24hr Response</span>
                      <p className="text-sm text-text-secondary">We'll contact you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <div>
                      <span className="font-medium text-text-primary">60-min Consultation</span>
                      <p className="text-sm text-text-secondary">In-depth assessment with Nurse Funmi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                    <div>
                      <span className="font-medium text-text-primary">Personalized Plan</span>
                      <p className="text-sm text-text-secondary">Custom treatment plan for your goals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Compliance */}
              <div className="bg-background rounded-2xl border-2 border-border p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Shield className="w-5 h-5" />
                  </div>
                  Safety & Compliance
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">All treatments require initial consultation</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">Prescription treatments require clinical assessment</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">Nurse-led for medical safety</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">GDPR-compliant data handling</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-background rounded-2xl border-2 border-border p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  Need Help?
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Prefer to book by phone or have questions before booking?
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+441234567890" 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-text-light">Call us directly</span>
                      <p className="font-medium text-text-primary">+44 1234 567890</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@feelaestheticclinic.com" 
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-text-light">Email us</span>
                      <p className="font-medium text-text-primary">info@feelaestheticclinic.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border-2 border-border">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-text-light">Clinic address</span>
                      <p className="font-medium text-text-primary">123 Clinic Street, London, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-secondary/30 rounded-2xl border-2 border-primary/20 p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">Cancellation Policy</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      48-hour cancellation notice required. Missed appointments or late cancellations may incur a fee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border-2 border-border p-4 text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <p className="text-xs text-text-secondary">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl border-2 border-border p-4 text-center">
                  <div className="text-2xl font-bold text-primary">1k+</div>
                  <p className="text-xs text-text-secondary">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 lg:mt-16 text-center border-t-2 border-border pt-8">
            <p className="text-text-secondary text-sm">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" className="text-primary hover:underline font-medium">Terms of Service</a>.
            </p>
            <p className="text-text-light text-xs mt-2">
              Feel Aesthetic Clinic is a nurse-led clinic specializing in natural aesthetic treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}