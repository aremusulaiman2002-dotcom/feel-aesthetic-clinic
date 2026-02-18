import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function TreatmentNotFound() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mx-auto text-center py-12 lg:py-20">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <AlertCircle className="w-10 h-10" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Treatment Not Found
          </h1>
          
          <p className="text-lg text-text-secondary mb-8">
            Sorry, the treatment you're looking for doesn't exist or may have been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/treatments"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Treatments
            </Link>
            
            <Link
              href="/"
              className="btn btn-outline"
            >
              Return Home
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}