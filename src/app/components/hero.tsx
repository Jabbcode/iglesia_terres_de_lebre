import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos</h1>
        <p className="text-xl mb-8">Un lugar de amor, fe y comunidad</p>
        <Button size="lg">Únete a Nosotros</Button>
      </div>
    </section>
  );
};
