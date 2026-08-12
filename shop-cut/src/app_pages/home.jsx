// import axios from "axios" // import React from 'react'
import { useState, useRef, useEffect } from "react";
import { RiHeartFill, RiHomeHeartFill } from "@remixicon/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Home() {
  const hearts = useRef();

  useGSAP(
    () => {
      gsap.from(".Dilli", { y: -10, opacity: 0, duration: 1 });
      // gsap.from(".Billi", { y: -10, opacity: 0, duration: 1 });
    },
    { scope: hearts },
  );
  return (
    <>
      <div
        ref={hearts}
        className=" w-dvw px-[25px] py-[12px] border border-black flex justify-between items-center flex-row flex-nowrap"
      >
        <RiHeartFill className="Dilli" color="red" />
        <RiHomeHeartFill ref={hearts} className=" Dilli text-blue-500" />
      </div>
      <div className="bg-red-200 w-screen flex justify-center items-center md:justify-start">
        hai
      </div>
      <div className="bg-red-200 w-screen flex justify-center items-center md:justify-start">
        bro
      </div>
      <div className="bg-red-200 w-screen flex justify-center items-center md:justify-start lg:justify-between">
        <p className="bg-blue-400">hai lala</p>
        <p className="bg-green-300">kya hal</p>
      </div>
    </>
  );
}

export { Home };
