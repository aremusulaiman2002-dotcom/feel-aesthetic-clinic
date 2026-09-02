import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 z-0 motion-reduce:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="hidden motion-reduce:block absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-poster.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      <div className="container-narrow relative z-20 w-full">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center space-y-6 py-24">
          <div className="badge-invert inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <span>Nurse-Led Aesthetic Clinic</span>
          </div>
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1] text-white">
              Enhance Your
              <span className="block mt-2 lg:mt-4">Natural Beauty</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mx-auto text-pretty max-w-2xl lg:max-w-3xl leading-relaxed">
              At Feel Aesthetic Clinic, we focus on natural-looking results that refresh and restore confidence.
              Our nurse-led approach ensures safe, subtle enhancements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 lg:pt-8">
            <Link href="/booking" className="btn btn-primary-invert btn-lg flex items-center justify-center gap-2 px-8 lg:px-10">
              <span className="text-base lg:text-lg">Book Consultation</span>
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link href="/treatments" className="btn btn-outline-invert btn-lg px-8 lg:px-10">
              <span className="text-base lg:text-lg">View Treatments</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
