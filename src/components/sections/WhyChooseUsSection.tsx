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

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            Why Choose Feel Aesthetic Clinic
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            We combine medical expertise with an artistic eye to deliver results that look and feel completely natural.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-5 lg:p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 p-3 lg:p-4 bg-primary/10 rounded-xl text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2 lg:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-text-secondary mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                {feature.description}
              </p>
              
              {/* Stat */}
              <div className="pt-3 lg:pt-4 border-t border-border">
                <div className="text-primary font-bold text-base lg:text-lg">
                  {feature.stat}
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-5 h-5 lg:w-6 lg:h-6 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-8 lg:mt-12 pt-8 lg:pt-12 border-t border-border">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-10 leading-tight">
            Our Simple 3-Step Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-border -z-10"></div>
            
            {[
              {
                number: '01',
                title: 'Comprehensive Consultation',
                description: '60-minute in-depth assessment of your facial anatomy and aesthetic goals.'
              },
              {
                number: '02',
                title: 'Personalized Treatment Plan',
                description: 'Custom treatment plan designed specifically for your unique features.'
              },
              {
                number: '03',
                title: 'Expert Treatment & Aftercare',
                description: 'Precision treatment followed by detailed aftercare guidance and follow-up.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-primary text-white rounded-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl font-bold mx-auto mb-4 lg:mb-6">
                  {step.number}
                </div>
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