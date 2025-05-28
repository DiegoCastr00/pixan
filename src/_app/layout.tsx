import { Metadata } from "next";
import { Link, useLocale, useTranslations } from "next-globe-gen";
import { ReactNode } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export const metadata: Metadata = {
  // NextGlobeGen injects alternate language links to the metadata object.
  // The metadataBase property is required for the language alternates to work
  // properly. The value should be the base URL of the application.
  metadataBase: new URL("https://example.com"),
  title: { template: "%s | NextGlobeGen", default: "NextGlobeGen" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <html lang={locale}>
      <body>
        <header>
          <LanguageSwitcher />
          <nav>
            <ul>
              <li>
                <Link href="/">{t("title")}</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
