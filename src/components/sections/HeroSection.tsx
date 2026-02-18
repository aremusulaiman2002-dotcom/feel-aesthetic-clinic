import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-off-white">
      <div className="container-narrow">
        <div className="section-lg">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center space-y-6">
            {/* Badge - PURE BLACK & WHITE */}
            <div className="inline-flex items-center gap-2 bg-off-white text-dark-gray rounded-full px-4 py-2 text-sm font-medium animate-fade-in border border-border">
              <span>Nurse-Led Aesthetic Clinic</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1] text-black">
                Enhance Your
                <span className="block text-dark-gray mt-2 lg:mt-4">Natural Beauty</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-medium-gray mx-auto text-pretty max-w-2xl lg:max-w-3xl leading-relaxed">
                At Feel Aesthetic Clinic, we focus on natural-looking results that refresh and restore confidence. 
                Our nurse-led approach ensures safe, subtle enhancements.
              </p>
            </div>
            
            {/* Buttons - BLACK & WHITE ONLY */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 lg:pt-8">
              <Link
                href="/booking"
                className="btn btn-primary btn-lg lg:btn-lg flex items-center justify-center gap-2 px-8 lg:px-10"
              >
                <span className="text-base lg:text-lg">Book Consultation</span>
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="/treatments"
                className="btn btn-outline btn-lg lg:btn-lg px-8 lg:px-10"
              >
                <span className="text-base lg:text-lg">View Treatments</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}