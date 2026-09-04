import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { treatments } from '@/data/treatments'

export default function sitemap(): MetadataRoute.Sitemap {
  // Content pages worth indexing. /booking is intentionally excluded here,
  // matching its noindex metadata and the robots.ts disallow rule — it's a
  // transactional page, not content.
  const staticRoutes = ['', '/treatments', '/gallery'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))

  const treatmentRoutes = treatments.map((treatment) => ({
    url: `${SITE_URL}/treatments/${treatment.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...treatmentRoutes]
}
