import Image from "next/image";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EventsProps {
  title: string;
}

import event_img1 from "/public/imgs/evento1.jpg";
import event_img2 from "/public/imgs/evento2.jpg";
import event_img3 from "/public/imgs/evento3.jpg";

export const Events = ({ title }: EventsProps) => {
  const events = [
    {
      id: 1,
      title: "Evento 1",
      date: "Fecha del Evento",
      description: "Breve descripción del evento y su propósito.",
      image: event_img1,
    },
    {
      id: 2,
      title: "Evento 2",
      date: "Fecha del Evento",
      description: "Breve descripción del evento y su propósito.",
      image: event_img2,
    },
    {
      id: 3,
      title: "Evento 3",
      date: "Fecha del Evento",
      description: "Breve descripción del evento y su propósito.",
      image: event_img3,
    },
  ];

  return (
    <section id="events" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="border rounded-lg overflow-hidden">
              <Image
                src={event.image}
                alt={`Evento ${event.description}`}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center mb-2">
                  <Clock className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <p className="mb-4">{event.description}</p>
                <Button variant="outline">Más Información</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
