"use client";

import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";
import HeroImage from "@/app/assets/hero.png";
import { HeroId } from "@/app/config/sectionId";

function JethaToolTip() {
  return (
    <img
      src={
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RiZ2R4bnpucmhjcDVodjRnZjJ6OGJoMWI4MHVuNHV4Y3lhYzZyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YoOM0hliors7cLsgmk/giphy.gif"
      }
      height={100}
      width={100}
      className="rounded z-30 hidden md:block"
    ></img>
  );
}

const favColors: string[] = [
  "bg-teal-400",
  "bg-indigo-500",
  "bg-yellow-400",
  "bg-amber-400",
  "bg-lime-400",
  "bg-emberald-400",
  "bg-sky-400",
  "bg-fuchsia-400",
];

export default function Hero() {
  const [hov, setHov] = useState(false);
  const [pos, setPos] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   tooltipRef.current
  //     ? (tooltipRef.current.style.left = String(pos) + "px")
  //     : null;
  // }, [pos]);

  return (
    <div className="bg-transparent w-full relative" id={HeroId}>
      <div className="h-full backdrop-blur-3xl z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-0 w-full flex flex-col ">
          <div className="h-28"></div>
          <div className="flex gap-x-2 items-center flex-col-reverse md:flex-row">
            <h1 className="relative text-center flex-1 font-semibold text-3xl flex flex-col z-30 items-start leading-relaxed text-gray-700">
              <div>Namaste 🙏, I'm </div>
              <div
                className="font-extrabold cursor-pointer tracking-wide text-5xl text-black"
                onMouseEnter={(event) => {
                  setHov(true);
                  setPos(event.clientX);
                }}
                onMouseMove={(event) => {
                  // console.log("Hello");
                  setPos(event.clientX);
                }}
                onMouseLeave={() => {
                  setHov(false);
                }}
              >
                Kunal Agrawal
              </div>
              <div
                className={`absolute top-0 right-0 ${hov ? "block" : "hidden"}`}
                ref={tooltipRef}
              >
                <JethaToolTip />
              </div>
            </h1>
            <div className="h-96 w-96 relative z-10">
              <Image
                src={HeroImage}
                alt="Kunal Agrawal"
                className="h-96 w-full object-contain z-40"
                height={600}
                width={400}
              />
              {/* <div className="w-64 h-40 rounded-full backdrop-blur absolute bg-white bg-opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Color Blurs */}
      {/* <div className="absolute top-36 left-1/2 bg-teal-500 w-20 h-20 -z-10"></div>
      <div className="absolute top-10 left-1/2 bg-indigo-400 w-32 h-32 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 bg-amber-400 w-28 h-28 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 bg-rose-400 w-28 h-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/4 bg-teal-400 w-28 h-28 -z-10"></div>
      <div className="absolute top-1/4 left-1/3 bg-lime-400 w-28 h-56 -z-10"></div> */}
    </div>
  );
}
