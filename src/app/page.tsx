import {
  About,
  Contact,
  Events,
  Footer,
  Hero,
  Navbar,
  Services,
} from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <Navbar />
      </header>

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Events title="Próximos Eventos" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
