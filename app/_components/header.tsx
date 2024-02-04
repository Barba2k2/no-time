import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <Card className="border-none shadow-none px-2 py-3">
        <CardContent className="bg-[#EDEDED] rounded-full h-[80px] z-99">
          <div className="flex flex-row justify-between items-center ">
            <Link href="/">
              <Image
                src="/header-logo.png"
                width={370}
                height={64}
                alt="No Time Fast Services"
                className="cursor-pointer mt-1"
              />
            </Link>
            <div className="flex flex-row">
              <Link href="/" className="px-2">
                <p className="text-base">Inicio</p>
              </Link>
              <Link href="/" className="px-2">
                <p className="text-base">Encontre trabalho</p>
              </Link>
              <Link href="/" className="px-2">
                <p className="text-base">Entre</p>
              </Link>
              <Link href="/" className="px-2">
                <p className="text-base">Cadastre-se</p>
              </Link>
            </div>
            <div className="">
              <Button className="relative mt-1.5 py-8 uppercase font-bold text-white text-xl bg-[#10BFCC] rounded-full">
                Publicar Projeto
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
