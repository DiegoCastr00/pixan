import { useTranslations } from "next-intl";
// Alternativamente, para obtener un traductor sin hooks (útil fuera de componentes o en funciones):
// import {getTranslator} from 'next-intl/server';

export default function HomePage() {
  const t = useTranslations("HomePage");
  // const tNav = useTranslations('Navigation'); // Para otra sección del JSON

  // Ejemplo con getTranslator (si lo necesitas fuera de un hook)
  // const translator = await getTranslator(params.locale, 'HomePage');
  // translator('title')

  const userName = "Usuario"; // Podrías obtener esto de una sesión, etc.

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("greeting", { name: userName })}</p>
      <p>{t("description")}</p>
      <nav>
        <p>Desde Navigation: {useTranslations("Navigation")("home")}</p>
      </nav>
    </div>
  );
}
