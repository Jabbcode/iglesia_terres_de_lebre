import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/imgs/about.jpg"
              alt="Iglesia biblica Terres de L'Ebre"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              La Iglesia biblica Terres de L&apos;Ebre es una comunidad
              acogedora dedicada a compartir el amor de Dios y a crecer juntos
              en fe. Nuestro objetivo es proporcionar un ambiente de apoyo donde
              todos puedan experimentar la gracia y el amor de Cristo.
            </p>
            <p className="text-lg">
              Ya sea que seas nuevo en la fe o hayas sido cristiano toda tu
              vida, te invitamos a unirte a nosotros en este viaje espiritual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
