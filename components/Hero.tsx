"use client";

import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";
import HeroImage from "@/assets/hero.png";
import { HeroId } from "@/config/sectionId";
import Data from "@/assets/data/data.json";

function CodeWindow() {
  return (
    <div className="max-w-xs md:max-w-md bg-gray-900 rounded-md border overflow-hidden shadow-md">
      <div className="bg-gray-950 border-b border-gray-400 px-2 py-1 flex gap-x-1">
        <div className="bg-red-600 rounded-full h-2 w-2"></div>
        <div className="bg-yellow-600 rounded-full h-2 w-2"></div>
        <div className="bg-green-600 rounded-full h-2 w-2"></div>
      </div>
      <div className="p-2 h-72 font-mono text-sm overflow-hidden">
        {/* html boiler plate with proper text color and end lines, code formating */}
        <p className="leading-none">
          <span className="text-green-600">{"<!DOCTYPE html>"}</span>
          <br />
          <span className="text-fuchsia-600">{"<html>"}</span>
          <br />
          <span className="text-fuchsia-600 ml-2">{"<head>"}</span>
          <br />
          <span className="text-fuchsia-600 ml-4">
            {"<meta"}
            <span className="text-yellow-600">{" charset"}</span>
            <span className="text-green-600">{"="}</span>
            <span className="text-blue-600">{'"UTF-8"'}</span>
            <span>{"/>"}</span>
          </span>
          <br />
          <span className="text-fuchsia-600 ml-4">
            {"<meta "}
            <span className="text-yellow-600">name</span>
            <span className="text-green-600">=</span>
            <span className="text-blue-600">"viewport"</span>{" "}
            <span className="text-yellow-600">content</span>
            <span className="text-green-600">=</span>
            <span className="text-blue-600">
              "width=device-width, initial-scale=1.0"
            </span>
            <span>{"/>"}</span>
          </span>
          <br />
          <span className="text-fuchsia-600 ml-4">
            {"<link "}
            <span className="text-yellow-600">rel</span>
            <span className="text-green-600">=</span>
            <span className="text-blue-600">"stylesheet"</span>{" "}
            <span className="text-yellow-600">href</span>
            <span className="text-green-600">=</span>
            <span className="text-blue-600">"style.css"</span>
            <span>{"/>"}</span>
          </span>
          <br />
          <span className="text-fuchsia-600 ml-4">
            {"<title>"}
            <span className="text-green-600">Kunal Agrawal</span>
            <span>{"</title>"}</span>
          </span>
          <br />
          <span className="text-fuchsia-600 ml-2">{"</head>"}</span>
          <br />
          <span className="ml-2 text-fuchsia-600">
            {`<body>`}
            <br />
            <span className="ml-4">
              {`<h1>`}
              <span className="text-green-600">{`Learn, Code, Sleep, Repeat 😎`}</span>
              <span>{`</h1>`}</span>
            </span>
            <br />
            <span className="ml-4">
              {`<p>`}
              <span className="text-green-600">
                {`I am a Full Stack Web Developer, enthusiast for learning web technologies.`}
              </span>
              <span>{`</p>`}</span>
            </span>
            <br />
            <span className="ml-4">
              {`<script `} <span className="text-yellow-600">{`src`}</span>
              <span className="text-green-600">=</span>
              <span className="text-blue-600">{'"script.js"'}</span>
              <span>{">"}</span>
              <span>{`</script>`}</span>
            </span>
            <br />
            <span className="ml-2">{`</body>`}</span>
          </span>
          <br />
          <span className="text-fuchsia-600">{"</html>"}</span>
        </p>
      </div>
    </div>
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
  return (
    <div className="bg-transparent w-full relative h-[100vh]" id={HeroId}>
      <div className="h-full backdrop-blur-3xl z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-0 w-full flex flex-col ">
          <div className="h-40 md:h-60"></div>
          <div className="flex gap-x-2 items-center flex-col-reverse md:flex-row gap-y-10 md:gap-y-0">
            <h1 className="relative text-center flex-1 font-semibold text-2xl md:text-3xl flex flex-col z-30 items-start leading-relaxed text-gray-700">
              <div>Namaste 🙏, I'm </div>
              <div className="font-extrabold tracking-wide text-3xl md:text-5xl text-black">
                {Data.name}
              </div>
            </h1>
            <div className="h-96 w-72 md:w-96 relative z-10">
              <div className="absolute w-full top-0 z-30 left-1/2 -translate-x-1/2">
                <CodeWindow />
              </div>
              <div className="absolute z-40 bottom-0">
                <Image
                  src={HeroImage}
                  alt="Kunal Agrawal"
                  className="h-96 w-full object-contain z-40"
                  height={600}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
