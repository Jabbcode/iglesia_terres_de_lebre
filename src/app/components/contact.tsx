import { Clock, MapPin, Phone } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input placeholder="Nombre" />
              <Input type="email" placeholder="Correo Electrónico" />
              <Textarea placeholder="Mensaje" />
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>Carrer Uldecona nº3, Tortosa, Tarragona</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+34 615 52 07 84</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2" />
                  <span>Domingo 11:30 AM - 1:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
