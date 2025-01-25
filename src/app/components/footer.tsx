export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {date.getFullYear()} Iglesia biblica Terres de L&apos;Ebre.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
