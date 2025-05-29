import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Define los idiomas que tu aplicación soportará
export const locales = ['en', 'es', 'de'];
export const defaultLocale = 'es';

export default getRequestConfig(async ({locale}) => {
  // Valida que el locale extraído de la URL sea soportado
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});