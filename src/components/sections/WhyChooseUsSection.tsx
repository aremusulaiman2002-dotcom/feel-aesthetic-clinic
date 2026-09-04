import { Award, Users, Clock, ThumbsUp } from 'lucide-react'

export function WhyChooseUsSection() {
  const features = [
    {
      icon: <Award className="w-7 h-7 lg:w-8 lg:h-8" />,
      title: 'Nurse-Led Excellence',
      description: 'All treatments performed by an experienced Nurse Practitioner with advanced aesthetic training.',
      stat: '10+ Years Experience'
    },
    {
      icon: <Users className="w-7 h-7 lg:w-8 lg:h-8" />,
      title: 'Personalized Approach',
      description: 'Every treatment plan is customized to your unique facial anatomy and aesthetic goals.',
      stat: '1000+ Happy Clients'
    },
    {
      icon: <Clock className="w-7 h-7 lg:w-8 lg:h-8" />,
      title: 'Natural Progression',
      description: 'We believe in gradual enhancement, allowing your features to develop naturally over time.',
      stat: '60-min Consultations'
    },
    {
      icon: <ThumbsUp className="w-7 h-7 lg:w-8 lg:h-8" />,
      title: 'Safety First',
      description: 'Medical-grade protocols and premium products ensure your safety is always our priority.',
      stat: '0% Compromise'
    }
  ]

  const steps = [
    {
      label: 'One',
      title: 'Comprehensive Consultation',
      description: '60-minute in-depth assessment of your facial anatomy and aesthetic goals.'
    },
    {
      label: 'Two',
      title: 'Personalized Treatment Plan',
      description: 'Custom treatment plan designed specifically for your unique features.'
    },
    {
      label: 'Three',
      title: 'Expert Treatment & Aftercare',
      description: 'Precision treatment followed by detailed aftercare guidance and follow-up.'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl lg:max-w-4xl mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            Why Choose Feel Aesthetic Clinic
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            We combine medical expertise with an artistic eye to deliver results that look and feel completely natural.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-14">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="mb-4 text-primary-deep w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2 lg:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap divide-x divide-border mb-10 lg:mb-14">
          {features.map((feature, index) => (
            <div key={index} className="px-6 lg:px-8 first:pl-0 py-2">
              <div className="text-primary-deep font-bold text-lg lg:text-xl">
                {feature.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="divider pt-8 lg:pt-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-10 leading-tight">
            Our Simple 3-Step Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index}>
                <p className="font-serif italic text-primary-deep text-sm mb-2 lg:mb-3">
                  {step.label}
                </p>
                <h4 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3 leading-tight">{step.title}</h4>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
