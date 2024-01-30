import React from "react";
import AstronautCodingSvg from "../assets/svgs/AstronautCoding.svg";
import HeartSvg from "../assets/svgs/Heart.svg";
import PlanetSvg from "../assets/svgs/Planet.svg";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="text-gray-950">
      <h4 className="text-xs font-bold text-gray-500 text-right">About Me</h4>
      {/* Layout Wrapper */}
      <div className="h-80 grid grid-cols-3 gap-x-7">
        {/* Image */}
        <div className="col-span-1">
          <div className="relative h-80">
            <img src={HeartSvg} alt="" className="absolute h-10 top-8 left-7" />
            <img
              src={PlanetSvg}
              alt=""
              className="absolute h-40 bottom-0 left-1/2 -translate-x-1/2"
            />
            <img
              src={AstronautCodingSvg}
              alt=""
              className="absolute h-40 left-1/2 -translate-x-1/2 top-10"
            />
          </div>
        </div>
        {/* Other Content */}
        <div className="col-span-2 self-center flex flex-col gap-y-4">
          <h3 className="text-4xl text-gray-950 font-extrabold">
            Enthusiastic Full Stack Web Developer
          </h3>
          {/* <p className="text-2xl tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            accusantium. <br /> a{" "}
            <span className="text-red-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </span>
          </p> */}
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            animi culpa sint magni ratione cumque, ipsa nesciunt recusandae
            soluta tempore.
          </p>
          <div className="flex gap-x-4 py-5 items-center">
            <div className="h-0.5 bg-gray-500 w-full rounded-full "></div>
            <a href="https://github.com/its-kunal" title="Github" className="rounded-full p-2 hover:bg-gray-50">
              <Github className="hover:text-red-600" />
            </a>
            <a href="https://www.linkedin.com/in/kunalagrawal24/" title="LinkedIn" className="rounded-full p-2 hover:bg-gray-50">
              <Linkedin className="hover:text-red-600" />
            </a>
            <a
              href="https://twitter.com/KunalPy3"
              title="Twitter"
              className="rounded-full p-2 hover:bg-gray-50"
            >
              <Twitter className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </section>
  );
}
