"use client";

import { usePathname, useRouter } from "@/i18n/navigation"; // Usar los de next-intl
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing"; // Usar la configuración de routing

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={currentLocale}
      style={{ padding: "0.5rem" }}
    >
      {routing.locales.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
