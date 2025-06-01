import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function CertificadosPage() {
  return (
    <div>
      {/* Hero Section con imagen de bienvenida */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Overlay con contenido de bienvenida */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Certificados
            </h1>
            <p className="text-lg md:text-xl">
              Nuestros certificados y acreditaciones
            </p>
          </div>
        </div>
      </div>

      {/* Contenido adicional que aparece al hacer scroll */}
      <div className=" min-h-screen p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Más Información
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Nuestros certificados y acreditaciones
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Aquí puedes agregar más contenido sobre certificados
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Este contenido aparece cuando haces scroll
          </p>
          <p className="text-lg text-gray-600 mb-4">
            El header se mantiene fijo arriba
          </p>
        </div>
      </div>
    </div>
  );
}
