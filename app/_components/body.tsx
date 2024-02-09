"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

const Body = () => {
  return (
    <div className="flex flex-col bg-[#FDFDFD]">
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
        <div className="absolute right-60 top-40">
          <Image src="/vector-1.png" alt="" width={640} height={400} />
        </div>
      </div>
      <div className="flex mt-10 px-52 py-56">
        <Card className="w-full h-[250px] shadow-xl border-none">
          <CardContent>
            <div className="flex flex-row justify-between items-center px-10 py-10">
              <div className="">
                <Avatar className="">
                  <AvatarImage
                    src="/locker.png"
                    width={1000}
                    height={1000}
                    style={{}}
                    alt="locker"
                  />
                </Avatar>
                <h1>Jetete</h1>
              </div>
              {/* <h2>Jetete</h2>
              <h3>Jetete</h3> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Body;
