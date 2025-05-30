import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const userName = "Usuario";

  return (
    <div className="flex flex-col items-center justify-center text-black ">
      <h1>{t("title")}</h1>
      <p>{t("greeting", { name: userName })}</p>
      <p>{t("description")}</p>
      <nav>
        <p className="text-black">
          Desde Navigation: {useTranslations("Navigation")("home")}
        </p>
      </nav>
    </div>
  );
}
