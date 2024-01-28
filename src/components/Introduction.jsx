import React from "react";
import AstronautSvg from "../assets/svgs/Astronaut.svg";
import PlanetSvg from "../assets/svgs/Planet.svg";

export default function Introduction() {
  return (
    <section>
      <h4 className="text-xs font-bold text-gray-500">Introduction</h4>
      <div className="grid grid-cols-3 h-80">
        {/* Typography */}
        <div className="col-span-2 self-center flex flex-col gap-y-4">
          {/* Namaste */}
          <h3 className="text-4xl text-gray-950 font-extrabold">Namaste 🙏</h3>
          <p className="text-2xl tracking-wider">
            I'm Kunal Agrawal <br /> a{" "}
            <span className="text-red-600">Full Stack Web Developer</span>
          </p>
          <p className="text-gray-500">
            Hi, I'm Kunal Agrawal a Full Stack Web Developer from India.
            Develops high quality Web Applications using MERN stack.
          </p>
          <div className="flex gap-x-2">
            <button className="bg-red-600 px-3 py-1 text-white rounded">
              Learn More
            </button>
            <button className="border border-gray-500 px-3 py-1 rounded text-gray-500">
              View CV
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-1">
          {/* Image Wrapper */}
          <div className="relative h-80">
            <img
              src={AstronautSvg}
              alt=""
              className="h-52 absolute z-10 top-0 right-1/2 translate-x-1/2"
            />
            <img
              src={PlanetSvg}
              alt=""
              className="h-72 absolute -bottom-20 right-2/4 translate-x-2/3"
            />
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </section>
  );
}
