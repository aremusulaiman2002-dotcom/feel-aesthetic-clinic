export type TreatmentCategory = | 'filler' | 'facials' | 'collagen-induction' | 'filler-dissolving' | 'botox' | 'skin-boosters' | 'fat-dissolving' | 'vitamins' | 'packages'

export interface Treatment {
  id: string
  slug: string
  title: string
  category: TreatmentCategory
  categoryName: string
  description: string
  shortDescription: string
  pricing: string | { option: string; price: string }[]
  duration?: string
  complianceNote?: string
  isPopular?: boolean
  isNew?: boolean
  metaTitle?: string
  metaDescription?: string
  detailedDescription?: string
  benefits?: string[]
  process?: string[]
  aftercare?: string[]
  faqs?: { question: string; answer: string }[]
  relatedTreatments?: string[]
}

export const treatments: Treatment[] = [
  // BOTOX
  {
    id: 'botox-1-area',
    slug: 'botox-1-area',
    title: 'Anti-Wrinkle Treatment - 1 Area',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Prescription-only treatment for natural wrinkle reduction in one treatment area.',
    shortDescription: 'Natural wrinkle reduction for one area.',
    pricing: '£170',
    duration: '30 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: true,
    metaTitle: 'Natural Botox Treatment in London | Feel Aesthetic Clinic',
    metaDescription: 'Nurse-led anti-wrinkle treatments for subtle, natural-looking results. Consultation required.'
  },
  {
    id: 'botox-2-areas',
    slug: 'botox-2-areas',
    title: 'Anti-Wrinkle Treatment - 2 Areas',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Prescription-only treatment for natural wrinkle reduction in two treatment areas.',
    shortDescription: 'Natural wrinkle reduction for two areas.',
    pricing: '£210',
    duration: '45 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: false
  },
  {
    id: 'botox-3-areas',
    slug: 'botox-3-areas',
    title: 'Anti-Wrinkle Treatment - 3 Areas',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Prescription-only treatment for natural wrinkle reduction in three treatment areas.',
    shortDescription: 'Natural wrinkle reduction for three areas.',
    pricing: '£250',
    duration: '45 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: false
  },
  {
    id: 'botox-nose-slimming',
    slug: 'botox-nose-slimming',
    title: 'Nose Slimming',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Non-surgical nose slimming to soften nasal flares and create a more refined appearance.',
    shortDescription: 'Non-surgical nose slimming and refinement.',
    pricing: '£170',
    duration: '30 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: false
  },
  {
    id: 'botox-brow-lift',
    slug: 'botox-brow-lift',
    title: 'Brow Lift',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Non-surgical brow elevation for a more open, refreshed eye area.',
    shortDescription: 'Non-surgical brow elevation and refresh.',
    pricing: '£170',
    duration: '30 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: true
  },
  {
    id: 'botox-masseters',
    slug: 'botox-masseters',
    title: 'Masseter Treatment',
    category: 'botox',
    categoryName: 'Anti-Wrinkle Treatments',
    description: 'Facial slimming, teeth grinding (bruxism), and TMJ relief through masseter muscle treatment.',
    shortDescription: 'Facial slimming, teeth grinding, TMJ relief.',
    pricing: '£265',
    duration: '45 minutes',
    complianceNote: 'Prescription-only treatment administered following clinical assessment.',
    isPopular: true
  },

  // FILLERS
  {
    id: 'lip-filler-0-5ml',
    slug: 'lip-filler-0-5ml',
    title: 'Lip Filler - 0.5ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Subtle lip enhancement with premium hyaluronic acid filler.',
    shortDescription: 'Subtle, natural lip enhancement.',
    pricing: '£170',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'lip-filler-1ml',
    slug: 'lip-filler-1ml',
    title: 'Lip Filler - 1ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Natural-looking lip enhancement with premium hyaluronic acid filler.',
    shortDescription: 'Natural-looking lip enhancement.',
    pricing: '£200',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'cheek-filler-1ml',
    slug: 'cheek-filler-1ml',
    title: 'Cheek Filler - 1ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Subtle cheek enhancement for natural facial balance and volume restoration.',
    shortDescription: 'Subtle cheek enhancement and volume.',
    pricing: '£230',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'cheek-filler-2ml',
    slug: 'cheek-filler-2ml',
    title: 'Cheek Filler - 2ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'More significant cheek volume restoration and contouring.',
    shortDescription: 'Enhanced cheek volume and contour.',
    pricing: '£290',
    duration: '60 minutes',
    isPopular: false
  },
  {
    id: 'nose-filler',
    slug: 'nose-filler',
    title: 'Full Liquid Rhinoplasty',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Non-surgical nose reshaping to smooth bumps and refine tip.',
    shortDescription: 'Non-surgical nose reshaping.',
    pricing: '£265',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'pixie-tip',
    slug: 'pixie-tip',
    title: 'Pixie Tip',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Subtle refinement of the nasal tip.',
    shortDescription: 'Subtle nasal tip refinement.',
    pricing: '£195',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'nose-bridge',
    slug: 'nose-bridge',
    title: 'Nose Bridge',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Smoothing of nasal bridge irregularities.',
    shortDescription: 'Nasal bridge smoothing.',
    pricing: '£195',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'jaw-filler-2ml',
    slug: 'jaw-filler-2ml',
    title: 'Jawline - 2ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Subtle jawline definition and contouring.',
    shortDescription: 'Subtle jawline definition.',
    pricing: '£290',
    duration: '60 minutes',
    isPopular: false
  },
  {
    id: 'jaw-filler-3ml',
    slug: 'jaw-filler-3ml',
    title: 'Jawline - 3ml',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'More significant jawline contouring and definition.',
    shortDescription: 'Enhanced jawline contouring.',
    pricing: '£390',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'chin-filler',
    slug: 'chin-filler',
    title: 'Chin Filler',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Chin enhancement for improved facial profile and balance.',
    shortDescription: 'Chin enhancement and balance.',
    pricing: '£200',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'nasolabial-folds',
    slug: 'nasolabial-folds',
    title: 'Nasolabial Folds',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Softening of smile lines for a refreshed appearance.',
    shortDescription: 'Softening of smile lines.',
    pricing: '£300',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'tear-trough',
    slug: 'tear-trough',
    title: 'Tear Trough',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Under-eye hollow correction for a rested, refreshed look.',
    shortDescription: 'Under-eye hollow correction.',
    pricing: '£300',
    duration: '45 minutes',
    isPopular: true
  },
  {
    id: 'marionette-lines',
    slug: 'marionette-lines',
    title: 'Marionette Lines',
    category: 'filler',
    categoryName: 'Dermal Fillers',
    description: 'Softening of lines around the mouth.',
    shortDescription: 'Softening of mouth lines.',
    pricing: '£200',
    duration: '45 minutes',
    isPopular: false
  },

  // FACIALS
  {
    id: 'dermaplaning',
    slug: 'dermaplaning-exfoliation',
    title: 'Dermaplaning Exfoliation',
    category: 'facials',
    categoryName: 'Facials',
    description: 'Gentle exfoliation for smooth, radiant skin. Removes dead skin cells and vellus hair (peach fuzz) for an instant glow.',
    shortDescription: 'Gentle exfoliation for smooth, radiant skin.',
    pricing: '£90',
    duration: '45 minutes',
    isPopular: false,
    benefits: [
      'Instant skin brightening',
      'Smoother makeup application',
      'Deeper product penetration',
      'Non-invasive, no downtime'
    ],
    process: [
      'Cleansing and skin analysis',
      'Gentle dermaplaning technique',
      'Soothing mask application',
      'SPF and moisturizer'
    ],
    aftercare: [
      'Avoid direct sun exposure for 48 hours',
      'No harsh exfoliants for 5-7 days',
      'Use gentle, hydrating skincare',
      'Wear SPF 30+ daily'
    ],
    faqs: [
      {
        question: 'Is dermaplaning painful?',
        answer: 'No, dermaplaning is completely painless. You may feel a gentle scraping sensation, but it is very comfortable.'
      },
      {
        question: 'How often should I have dermaplaning?',
        answer: 'We recommend every 3-4 weeks to maintain smooth, glowing skin.'
      }
    ]
  },
  {
    id: 'hydrate-lift',
    slug: 'hydrate-lift',
    title: 'Hydrate & Lift Facial',
    category: 'facials',
    categoryName: 'Facials',
    description: 'Deep hydration with lifting massage techniques to restore volume and elasticity.',
    shortDescription: 'Deep hydration with lifting massage techniques.',
    pricing: '£90',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'glass-skin',
    slug: 'glass-skin',
    title: 'Glass Skin Facial',
    category: 'facials',
    categoryName: 'Facials',
    description: 'Achieve that coveted translucent, glass-like complexion with intensive hydration and brightening.',
    shortDescription: 'Achieve translucent, glass-like complexion.',
    pricing: '£90',
    duration: '60 minutes',
    isPopular: true
  },
  {
    id: 'mens-facial',
    slug: 'mens-facial',
    title: 'Men’s Facial',
    category: 'facials',
    categoryName: 'Facials',
    description: 'Deep cleansing facial tailored for men\'s skin, targeting congestion and razor burn.',
    shortDescription: 'Deep cleansing tailored for men\'s skin.',
    pricing: '£90',
    duration: '50 minutes',
    isPopular: false
  },

  // COLLAGEN INDUCTION THERAPY
  {
    id: 'microneedling',
    slug: 'microneedling',
    title: 'Microneedling',
    category: 'collagen-induction',
    categoryName: 'Collagen Induction Therapy',
    description: 'Stimulates collagen production to improve skin texture, scars, and fine lines.',
    shortDescription: 'Stimulates collagen for improved texture and scars.',
    pricing: '£175',
    duration: '60 minutes',
    isPopular: true,
    complianceNote: 'Clinical procedure performed by Nurse Practitioner Funmi.'
  },

  // FILLER DISSOLVING
  {
    id: 'filler-dissolving',
    slug: 'filler-dissolving',
    title: 'Filler Dissolving',
    category: 'filler-dissolving',
    categoryName: 'Filler Dissolving',
    description: 'Safe, effective dissolution of unwanted or overfilled dermal fillers using hyaluronidase.',
    shortDescription: 'Safe dissolution of unwanted dermal fillers.',
    pricing: '£120',
    duration: '30 minutes',
    isPopular: false,
    complianceNote: 'Prescription-only treatment administered following clinical assessment.'
  },

  // SKIN BOOSTERS & POLYNUCLEOTIDES
  {
    id: 'lumi-eyes',
    slug: 'lumi-eyes',
    title: 'Lumi Eyes',
    category: 'skin-boosters',
    categoryName: 'Skin Boosters',
    description: 'Targeted treatment for dark circles and under-eye brightness.',
    shortDescription: 'Targeted treatment for dark circles.',
    pricing: '£165',
    duration: '30 minutes',
    isPopular: true
  },
  {
    id: 'prophilo',
    slug: 'prophilo',
    title: 'Prophilo®',
    category: 'skin-boosters',
    categoryName: 'Skin Boosters',
    description: 'Bio-remodelling treatment to hydrate, lift, and tighten skin.',
    shortDescription: 'Bio-remodelling for hydration and lift.',
    pricing: '£300',
    duration: '45 minutes',
    isPopular: true
  },
  {
    id: 'seventy-hyal',
    slug: 'seventy-hyal',
    title: 'Seventy Hyal',
    category: 'skin-boosters',
    categoryName: 'Skin Boosters',
    description: 'High-density hyaluronic acid for deep hydration and plumping.',
    shortDescription: 'High-density hyaluronic acid treatment.',
    pricing: '£165',
    duration: '30 minutes',
    isPopular: false
  },
  {
    id: 'vitaran-eye',
    slug: 'vitaran-eye',
    title: 'Vitaran Eye Treatment',
    category: 'skin-boosters',
    categoryName: 'Skin Boosters',
    description: 'Polynucleotide treatment specifically formulated for the delicate eye area.',
    shortDescription: 'Polynucleotide treatment for eyes.',
    pricing: '£165',
    duration: '30 minutes',
    isPopular: false
  },

  // FAT DISSOLVING
  {
    id: 'under-chin',
    slug: 'under-chin-fat-dissolving',
    title: 'Under Chin Fat Dissolving',
    category: 'fat-dissolving',
    categoryName: 'Fat Dissolving',
    description: 'Non-surgical reduction of submental fat (double chin).',
    shortDescription: 'Non-surgical double chin reduction.',
    pricing: '£135',
    duration: '30 minutes',
    isPopular: true
  },
  {
    id: 'abdomen',
    slug: 'abdomen-fat-dissolving',
    title: 'Abdomen Fat Dissolving',
    category: 'fat-dissolving',
    categoryName: 'Fat Dissolving',
    description: 'Targeted fat reduction for abdominal area.',
    shortDescription: 'Targeted fat reduction for abdomen.',
    pricing: 'From £300',
    duration: '45 minutes',
    isPopular: false
  },
  {
    id: 'under-arms',
    slug: 'under-arms-fat-dissolving',
    title: 'Under Arms Fat Dissolving',
    category: 'fat-dissolving',
    categoryName: 'Fat Dissolving',
    description: 'Targeted fat reduction for bra line and underarm area.',
    shortDescription: 'Targeted fat reduction for underarms.',
    pricing: 'From £200',
    duration: '30 minutes',
    isPopular: false
  },
  {
    id: 'back',
    slug: 'back-fat-dissolving',
    title: 'Back Fat Dissolving',
    category: 'fat-dissolving',
    categoryName: 'Fat Dissolving',
    description: 'Targeted fat reduction for upper and lower back.',
    shortDescription: 'Targeted fat reduction for back.',
    pricing: 'From £200',
    duration: '45 minutes',
    isPopular: false
  },

  // VITAMINS
  {
    id: 'vitamin-b12',
    slug: 'vitamin-b12',
    title: 'Vitamin B12 Injection',
    category: 'vitamins',
    categoryName: 'Vitamin Injections',
    description: 'Energy-boosting Vitamin B12 injection.',
    shortDescription: 'Energy-boosting Vitamin B12.',
    pricing: '£25',
    duration: '15 minutes',
    isPopular: true
  },

  // PACKAGES
  {
    id: 'package-2ml',
    slug: '2ml-feel-filler-package',
    title: '2ML Feel Filler Package',
    category: 'packages',
    categoryName: 'Packages',
    description: 'Up to 3 areas including lips, nose, cheeks, chin, jaw.',
    shortDescription: '2ml filler across up to 3 areas.',
    pricing: '£295',
    isPopular: true
  },
  {
    id: 'package-3ml',
    slug: '3ml-feel-filler-package',
    title: '3ML Feel Filler Package',
    category: 'packages',
    categoryName: 'Packages',
    description: 'Up to 3 areas including lips, nose, cheeks, chin, jaw.',
    shortDescription: '3ml filler across up to 3 areas.',
    pricing: '£395',
    isPopular: false
  },
  {
    id: 'package-4ml',
    slug: '4ml-feel-filler-package',
    title: '4ML Feel Filler Package',
    category: 'packages',
    categoryName: 'Packages',
    description: 'Up to 5 areas including lips, nose, cheeks, chin, jaw.',
    shortDescription: '4ml filler across up to 5 areas.',
    pricing: '£495',
    isPopular: false
  },
  {
    id: 'package-5ml',
    slug: '5ml-feel-filler-package',
    title: '5ML Feel Filler Package',
    category: 'packages',
    categoryName: 'Packages',
    description: 'Up to 5 areas including lips, nose, cheeks, chin, jaw.',
    shortDescription: '5ml filler across up to 5 areas.',
    pricing: '£595',
    isPopular: false
  },
  {
    id: 'package-all-inclusive',
    slug: 'all-inclusive-feel-package',
    title: 'All Inclusive Feel Package',
    category: 'packages',
    categoryName: 'Packages',
    description: 'Bespoke combination of Botox, Skin Boosters, and Fillers for holistic facial balancing.',
    shortDescription: 'Bespoke combination treatment.',
    pricing: '£1200',
    complianceNote: 'Including prescription treatments where clinically appropriate.',
    duration: 'Custom treatment plan',
    isPopular: true
  }
]

export const categories = [
  { id: 'botox', name: 'Anti-Wrinkle', count: 6, icon: 'Activity' },
  { id: 'filler', name: 'Dermal Fillers', count: 13, icon: 'Syringe' },
  { id: 'facials', name: 'Facials', count: 4, icon: 'Sparkles' },
  { id: 'collagen-induction', name: 'Collagen Induction', count: 1, icon: 'Zap' },
  { id: 'filler-dissolving', name: 'Filler Dissolving', count: 1, icon: 'Droplet' },
  { id: 'skin-boosters', name: 'Skin Boosters', count: 4, icon: 'Droplets' },
  { id: 'fat-dissolving', name: 'Fat Dissolving', count: 4, icon: 'Flame' },
  { id: 'vitamins', name: 'Vitamin Injections', count: 1, icon: 'Leaf' },
  { id: 'packages', name: 'Packages', count: 5, icon: 'Gift' }
]

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find(treatment => treatment.slug === slug)
}

export function getTreatmentsByCategory(category: TreatmentCategory): Treatment[] {
  return treatments.filter(treatment => treatment.category === category)
}

export function getPopularTreatments(): Treatment[] {
  return treatments.filter(treatment => treatment.isPopular)
}

export function getRelatedTreatments(treatment: Treatment): Treatment[] {
  if (!treatment.relatedTreatments) {
    // If no specific related treatments, get others from same category
    return treatments
      .filter(t => t.category === treatment.category && t.id !== treatment.id)
      .slice(0, 3)
  }
  return treatments.filter(t => treatment.relatedTreatments?.includes(t.id))
}