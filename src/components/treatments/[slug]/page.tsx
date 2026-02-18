import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Clock, Award, AlertCircle, CheckCircle, Calendar, ArrowRight, Shield, Heart, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { TreatmentCard } from '@/components/treatments/TreatmentCard'
import { PriceDisplay } from '@/components/treatments/PriceDisplay'
import { treatments, getTreatmentBySlug, getRelatedTreatments } from '@/data/treatments'

interface TreatmentPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)
  
  if (!treatment) {
    return {
      title: 'Treatment Not Found | Feel Aesthetic Clinic',
      description: 'The requested treatment could not be found.'
    }
  }

  return {
    title: treatment.metaTitle || `${treatment.title} | Feel Aesthetic Clinic`,
    description: treatment.metaDescription || treatment.description,
    openGraph: {
      title: treatment.metaTitle || `${treatment.title} | Feel Aesthetic Clinic`,
      description: treatment.metaDescription || treatment.description,
      type: 'website',
    }
  }
}

// Generate static paths for all treatments
export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export default function TreatmentPage({ params }: TreatmentPageProps) {
  const treatment = getTreatmentBySlug(params.slug)
  
  if (!treatment) {
    notFound()
  }

  const relatedTreatments = getRelatedTreatments(treatment)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-white">
        <Container>
          <div className="section-lg">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-6">
                <Link href="/" className="text-text-light hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="text-text-light">/</span>
                <Link href="/treatments" className="text-text-light hover:text-primary transition-colors">
                  Treatments
                </Link>
                <span className="text-text-light">/</span>
                <span className="text-text-primary font-medium">{treatment.title}</span>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                {treatment.categoryName}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {treatment.title}
              </h1>

              {/* Price & Duration */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <PriceDisplay treatment={treatment} variant="large" />
                </div>
                {treatment.duration && (
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">{treatment.duration}</span>
                  </div>
                )}
                {treatment.isPopular && (
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">Most Popular</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed mb-8">
                {treatment.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="btn btn-primary btn-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </Link>
                <Link
                  href="#details"
                  className="btn btn-outline btn-lg flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Compliance Note - Highlighted */}
              {treatment.complianceNote && (
                <div className="mt-8 p-4 bg-secondary/30 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-text-secondary font-medium">
                      {treatment.complianceNote}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Content */}
      <Section id="details" background="white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-10">
              {/* Detailed Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  About This Treatment
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {treatment.detailedDescription || treatment.description}
                </p>
              </div>

              {/* Benefits */}
              {treatment.benefits && treatment.benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {treatment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Treatment Process */}
              {treatment.process && treatment.process.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    What to Expect
                  </h2>
                  <div className="space-y-4">
                    {treatment.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-text-secondary">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aftercare */}
              {treatment.aftercare && treatment.aftercare.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Aftercare Guidelines
                  </h2>
                  <div className="space-y-3">
                    {treatment.aftercare.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span className="text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {treatment.faqs && treatment.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {treatment.faqs.map((faq, index) => (
                      <div key={index} className="border-2 border-border rounded-xl p-5">
                        <h3 className="font-bold text-text-primary mb-2">{faq.question}</h3>
                        <p className="text-text-secondary">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl border-2 border-border p-6 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Quick Information</h3>
                
                <div className="space-y-4">
                  {/* Price */}
                  <div className="flex justify-between items-start pb-4 border-b border-border">
                    <span className="text-text-secondary">Price</span>
                    <div className="text-right">
                      <PriceDisplay treatment={treatment} variant="default" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  {treatment.duration && (
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-text-secondary">Duration</span>
                      <span className="font-medium text-text-primary">{treatment.duration}</span>
                    </div>
                  )}

                  {/* Performed By */}
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-text-secondary">Performed by</span>
                    <span className="font-medium text-text-primary">Nurse Funmi</span>
                  </div>

                  {/* Consultation */}
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Consultation</span>
                    <span className="font-medium text-text-primary">Required</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Link
                    href="/booking"
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Ask a Question
                  </Link>
                </div>

                {/* Safety Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Shield className="w-4 h-4 text-primary" />
                    Nurse-led medical safety
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary mt-2">
                    <Heart className="w-4 h-4 text-primary" />
                    Natural, subtle results
                  </div>
                </div>
              </div>

              {/* Multiple Pricing Options - Only show if treatment has array pricing */}
              {Array.isArray(treatment.pricing) && treatment.pricing.length > 1 && (
                <div className="bg-background rounded-2xl border-2 border-border p-6">
                  <h4 className="font-semibold text-text-primary mb-3">Pricing Options</h4>
                  <div className="space-y-2">
                    {treatment.pricing.map((option, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-text-secondary">{option.option}</span>
                        <span className="font-semibold text-primary">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <Section background="cream" spacing="lg">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                You Might Also Consider
              </h2>
              <p className="text-lg text-text-secondary">
                Explore these related treatments for comprehensive facial balancing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTreatments.slice(0, 3).map((related) => (
                <TreatmentCard key={related.id} treatment={related} variant="compact" />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-white to-background">
        <Container>
          <div className="section-lg text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Natural Beauty?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Take the first step towards feeling confident and refreshed. 
              Book your consultation with Nurse Practitioner Funmi today.
            </p>
            <Link
              href="/booking"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Your Consultation
            </Link>
            <p className="text-text-light text-sm mt-4">
              Consultation required for all treatments
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}