import { Clock } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Servicio Dominical</h3>
            <div className="flex items-center mb-2">
              <Clock className="mr-2" />
              <span>11:30 AM</span>
            </div>
            <p>
              Únete a nosotros para alabanza, oración y un mensaje inspirador de
              la Palabra de Dios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Estudio Bíblico</h3>
            <div className="flex items-center mb-2">
              <Clock className="mr-2" />
              <span>Viernes 7:00 PM</span>
            </div>
            <p>
              Profundiza tu comprensión de las Escrituras en nuestro estudio
              bíblico semanal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
