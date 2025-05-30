import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const userName = "Usuario";

  return (
    <div className="flex flex-col items-center justify-center bg-dark text-black min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <p className="mb-4">{t("greeting", { name: userName })}</p>
      <p className="mb-8">{t("description")}</p>

      {/* Test de colores personalizados */}
      <div className="space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Test de Colores Personalizados:
        </h2>

        <div className="bg-dark text-white p-4 rounded-lg">
          <p>bg-dark: Este debería tener fondo oscuro (#212529)</p>
        </div>

        <div className="bg-light text-dark p-4 rounded-lg">
          <p>bg-light: Este debería tener fondo claro (#F5F6F7)</p>
        </div>

        <div className="bg-secondary text-dark p-4 rounded-lg">
          <p>bg-secondary: Este debería tener fondo secundario (#EFE8DC)</p>
        </div>

        <div className="bg-tertiary text-white p-4 rounded-lg">
          <p>bg-tertiary: Este debería tener fondo terciario (#171717)</p>
        </div>

        <div className="bg-quaternary text-dark p-4 rounded-lg border">
          <p>bg-quaternary: Este debería tener fondo blanco (#ffffff)</p>
        </div>

        <div className="bg-quinary text-white p-4 rounded-lg">
          <p>bg-quinary: Este debería tener fondo negro (#000000)</p>
        </div>
      </div>

      <nav className="mt-8">
        <p className="text-black">
          Desde Navigation: {useTranslations("Navigation")("home")}
        </p>
      </nav>
    </div>
  );
}
