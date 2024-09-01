"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/app/assets/logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import {
  AboutMeId,
  ContactId,
  ExperienceId,
  HeroId,
  ProjectsId,
} from "../config/sectionId";

const links = [
  {
    name: "About",
    href: "#" + AboutMeId,
  },
  {
    name: "Projects",
    href: "#" + ProjectsId,
  },
  {
    name: "Experience",
    href: "#" + ExperienceId,
  },
  {
    name: "Contact",
    href: "#" + ContactId,
  },
];

function BottomNavigationBar() {
  return (
    <div className="flex justify-center items-center md:hidden bg-purple-100 h-10 w-full fixed bottom-0 rounded-t-md z-10">
      <div className="gap-4 flex">
        {links.map((link, idx) => {
          return (
            <a href={link.href} key={idx}>
              <span className="text-sm">{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function AppBar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`z-30 fixed md:w-full h-16 md:rounded-none self-center ${
          scrolled
            ? "bg-white bg-opacity-60 backdrop-blur-sm w-[90%] rounded-md md:top-0 top-5 shadow-sm"
            : "bg-transparent w-full shadow-lg"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="mx-auto max-w-4xl flex items-center h-full px-4 md:px-0 py-1 justify-between">
          <div
            className="flex gap-4 items-center"
            onClick={() => {
              navigate.push("#" + HeroId);
            }}
          >
            <Image src={Logo} alt={"Kunal Agrawal"} height={30} width={30} />
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-widest leading-none">
                Kunal
              </span>
              <span className="font-bold text-sm tracking-widest leading-none">
                Agrawal
              </span>
            </div>
          </div>
          <div className="gap-2 md:gap-4 hidden md:flex">
            {links.map((link, idx) => {
              return (
                <a key={idx} href={link.href}>
                  <span className="text-xs">{link.name}</span>
                </a>
              );
            })}
          </div>
          <button
            className="rounded bg-purple-200 px-2 py-1 flex gap-x-2 items-center"
            onClick={() => {
              navigate.push("https://www.linkedin.com/in/kunalagrawal24/");
            }}
          >
            <span className="text-sm font-semibold">Let's Connect</span>
            <span>
              <FontAwesomeIcon
                icon={faCircleNodes}
                height={12}
                width={12}
                className="animate-spin "
              />
            </span>
          </button>
        </div>
      </nav>
      <BottomNavigationBar />
    </>
  );
}
