import { CheckCircle, Heart, Shield, Star } from 'lucide-react'

export function AboutSection() {
  const values = [
    {
      icon: <Shield className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Medical Safety First',
      description: 'All treatments performed by Nurse Practitioner Funmi with strict medical protocols.'
    },
    {
      icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Natural Results',
      description: 'We enhance your natural features, never over-treating or creating artificial looks.'
    },
    {
      icon: <Star className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Holistic Approach',
      description: 'Treating the face as a whole, considering balance, proportion and harmony.'
    },
    {
      icon: <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique facial features and goals.'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Content & Values */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 text-dark-gray text-sm font-semibold uppercase tracking-wider">
                <span className="w-8 h-px bg-light-gray"></span>
                About Our Clinic
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Where Natural Beauty Meets Medical Excellence
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-medium-gray leading-relaxed">
                  Welcome to Feel Aesthetic Clinic, founded by Nurse Practitioner Funmi. 
                  We believe in enhancing your natural beauty with subtle, medically-sound treatments 
                  that make you feel confident and refreshed.
                </p>
                <p className="text-medium-gray lg:text-lg leading-relaxed">
                  Our nurse-led approach ensures every treatment is performed with clinical precision, 
                  prioritizing safety and natural-looking results above all else.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group p-4 lg:p-5 rounded-xl bg-off-white border border-border hover:border-black/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="p-2 lg:p-3 bg-white rounded-lg text-black border border-border group-hover:border-black/30 transition-colors flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1 text-base lg:text-lg">{value.title}</h3>
                      <p className="text-sm lg:text-base text-medium-gray leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Quote Stack */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Image Container */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-off-white border border-border overflow-hidden">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
                  <div className="text-center">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto rounded-full bg-white border-2 border-border flex items-center justify-center mb-4 lg:mb-6">
                      <div className="w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full bg-off-white flex items-center justify-center">
                        <Heart className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-dark-gray/40" />
                      </div>
                    </div>
                    <p className="text-medium-gray italic text-sm lg:text-base">
                      Image of Nurse Practitioner Funmi
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-off-white border border-border rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-off-white border border-border rounded-2xl -z-10"></div>
            </div>

            {/* Quote */}
            <div className="p-5 lg:p-6 bg-off-white rounded-2xl border-l-4 border-black">
              <p className="text-black italic text-lg lg:text-xl leading-relaxed">
                "At Feel, we don't try to change how you look. We enhance your natural features with care, precision, and a deep understanding of balance and beauty."
              </p>
              <div className="mt-4 lg:mt-6 flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">NF</span>
                </div>
                <div>
                  <div className="font-semibold text-black text-base lg:text-lg">Nurse Practitioner Funmi</div>
                  <div className="text-sm lg:text-base text-medium-gray">Founder, Feel Aesthetic Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}