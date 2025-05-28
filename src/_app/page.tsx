import type { Metadata } from "next";
import { getTranslations, useTranslations } from "next-globe-gen";

export function generateMetadata(): Metadata {
  const t = getTranslations();
  return { description: t("description", { name: "NextGlobeGen" }) };
}

export default function Home() {
  const t = useTranslations();
  return (
    <section>
      <h1>{t("title")}</h1>
      <p>{t("description", { name: "NextGlobeGen" })}</p>
    </section>
  );
}
