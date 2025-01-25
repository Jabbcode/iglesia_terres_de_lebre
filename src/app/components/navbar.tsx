import { Instagram } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <Link href="/" className="flex items-center">
        {/* <Image
          src="/placeholder.svg?height=40&width=40&text=Logo"
          alt="Logo de la Iglesia biblica Terres de L'Ebre"
          width={40}
          height={40}
          className="mr-2"
        /> */}
        <span className="text-2xl font-bold">
          Iglesia biblica Terres de L&apos;Ebre
        </span>
      </Link>
      <div>
        <Link href="https://www.instagram.com/ibterresdelebre/" target="_blank">
          <Instagram />
        </Link>
      </div>
    </div>
  );
};
