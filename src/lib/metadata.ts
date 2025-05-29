import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(
  locale: string,
  page: string = 'home'
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/${locale}`;
  
  // Metadatos base
  const metadata: Metadata = {
    title: page === 'home' ? t('title') : t(`${page}.title`),
    description: page === 'home' ? t('description') : t(`${page}.description`),
    keywords: t('keywords'),
    
    // Open Graph
    openGraph: {
      title: page === 'home' ? t('title') : t(`${page}.title`),
      description: page === 'home' ? t('description') : t(`${page}.description`),
      url: url,
      siteName: t('title'),
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: page === 'home' ? t('title') : t(`${page}.title`),
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: page === 'home' ? t('title') : t(`${page}.title`),
      description: page === 'home' ? t('description') : t(`${page}.description`),
      images: [`${baseUrl}/og-image.jpg`],
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: url,
      languages: {
        'es': `${baseUrl}/es`,
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
      },
    },
  };

  return metadata;
}

export async function generatePageMetadata(
  params: { locale: string },
  page: string = 'home'
): Promise<Metadata> {
  return generateMetadata(params.locale, page);
} 