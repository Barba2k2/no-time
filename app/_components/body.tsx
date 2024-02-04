import Image from "next/image";
import { Button } from "./ui/button";

const Body = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col ml-60 mt-52">
        <h1 className="flex justify-center font-bold text-6xl">
          Você tem procurado <br />
          por freelancers?
        </h1>
        <p className="text-gray-400 mt-4 text-xl">
          Contrate ótimos freelancers rapidamente. No Time te <br />
          ajuda a contratar freelancers de elite a qualquer <br />
          momento
        </p>
        <div>
          <Button className="relative mt-8 py-8 uppercase font-bold text-white text-xl bg-[#10BFCC] rounded-xl">
            Publicar Projeto
          </Button>
        </div>
      </div>
      <div className="absolute right-52">
        <Image src="/vector-1.png" alt="" width={640} height={400} />
      </div>
    </div>
  );
};

export default Body;
