import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Páginas disponibles
  const pages = ['', '/about']; // '' representa la página principal
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Generar entradas para cada idioma y página
  routing.locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8, // Página principal tiene prioridad más alta
        alternates: {
          languages: routing.locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });
  
  return sitemap;
} 