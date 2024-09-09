import { ResumeId } from "@/app/config/sectionId";
import {
  faLocationDot,
  faPhone,
  faAt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import D3SVG from "@/app/assets/icons/d3js.svg";
import FirebaseSVG from "@/app/assets/icons/firebase.svg";
import CloudRunSVG from "@/app/assets/icons/google_cloud_run.svg";
import JavaScriptSVG from "@/app/assets/icons/javascript.svg";
import MongoDBSVG from "@/app/assets/icons/mongodb.svg";
import NextJsSVG from "@/app/assets/icons/nextjs.svg";
import NodeJsSVG from "@/app/assets/icons/nodejs.svg";
import ReactJsSVG from "@/app/assets/icons/react.svg";
import RedisSVG from "@/app/assets/icons/redis.svg";
import SocketIoSVG from "@/app/assets/icons/socketio.svg";
import TypeScriptSVG from "@/app/assets/icons/typescript.svg";
import ViteJsSVG from "@/app/assets/icons/vitejsdev.svg";
import Image from "next/image";
import Data from "@/app/assets/data/data.json";

const EXPERIENCE = [
  {
    organisation: "Ionage Technologies Private Limited",
    role: "Full Stack Developer Intern",
    period: "Feb 2024 - Present",
  },
  {
    organisation: "Technoboot",
    role: "Front-End Developer Intern",
    period: "Oct 2022 - Dec 2022",
  },
  {
    organisation: "EVREX",
    role: "Developer Intern",
    period: "Feb 2022 - Oct 2022",
  },
];

const TECHSTACKS = {
  d3js: {
    name: "D3.js",
    logo: D3SVG,
  },
  firebase: {
    name: "Firebase",
    logo: FirebaseSVG,
  },
  cloudrun: {
    name: "Google Cloud Run",
    logo: CloudRunSVG,
  },
  nextjs: {
    name: "Next.js",
    logo: NextJsSVG,
  },
  nodejs: {
    name: "Node.js",
    logo: NodeJsSVG,
  },
  mongodb: {
    name: "MongoDB",
    logo: MongoDBSVG,
  },
  redis: {
    name: "Redis",
    logo: RedisSVG,
  },
  socketio: {
    name: "Socket.io",
    logo: SocketIoSVG,
  },
  reactjs: {
    name: "React.js",
    logo: ReactJsSVG,
  },
  vitejs: {
    name: "Vite.js",
    logo: ViteJsSVG,
  },
  typescript: {
    name: "TypeScript",
    logo: TypeScriptSVG,
  },
  javascript: {
    name: "JavaScript",
    logo: JavaScriptSVG,
  },
};

const PROJECTS = [
  {
    name: "Chatterbox",
    link: "",
    description: "",
    techStack: [
      TECHSTACKS.typescript,
      TECHSTACKS.socketio,
      TECHSTACKS.cloudrun,
      TECHSTACKS.firebase,
      TECHSTACKS.nodejs,
      TECHSTACKS.reactjs,
      TECHSTACKS.redis,
      TECHSTACKS.vitejs,
    ],
    thumbnail: "",
  },
  // {
  //   name: "Agrosite",
  //   link: "",
  //   description: "",
  //   techStack: [{ name: "", icon: "" }],
  //   thumbnail: "",
  // },
  // {
  //   name: "Opinionest",
  //   link: "",
  //   description: "",
  //   techStack: [{ name: "", icon: "" }],
  //   thumbnail: "",
  // },
];

export default function Resume() {
  return (
    <section className="w-full relative mt-10 h-[100vh]" id={ResumeId}>
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        {/* heading */}
        <h2 className="text-center text-4xl font-bold">Resume</h2>
        {/* divider */}
        <div className="h-[1px] w-full bg-gray-300 mt-2 mb-4 rounded-full"></div>
        {/* content */}
        <div className="flex flex-col gap-y-4">
          {/* Address, Mail, Phone, Linkedin */}
          <div className="grid grid-cols-2 gap-y-1 md:gap-y-0 md:grid-cols-4 text-gray-800">
            <div className="flex gap-x-2 items-center hover:text-black">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Chhattisgarh, India</span>
            </div>
            <div className="flex gap-x-2 items-center hover:text-black">
              <FontAwesomeIcon icon={faAt} />
              <span>kunal.py3@gmail.com</span>
            </div>
            <div className="flex gap-x-2 items-center hover:text-black">
              <FontAwesomeIcon icon={faPhone} />
              <span>{"+91 8959558869"}</span>
            </div>
            <div className="flex gap-x-2 items-center hover:text-black">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>kunalagrawal24</span>
            </div>
          </div>
          {/* summary */}
          <div className="flex flex-col gap-y-1">
            <h2 className="font-bold text-lg">Professional Summary</h2>
            <p className="text-gray-800">
              Develops robust, responsive, and pixel-perfect web applications.
              An experienced Full Stack Web Developer with a Bachelor’s In
              Technology in Computer Science Engineering. Looking to join as a
              Software Development Engineer (SDE).
            </p>
          </div>
          {/* experience */}
          <div className="flex flex-col gap-y-1">
            <h2 className="font-bold text-lg"> Professional Experience</h2>
            <ul className="list-disc list-inside">
              {EXPERIENCE.map((exp, idx) => {
                return (
                  <li key={idx}>
                    <span className="font-bold">{exp.organisation}</span>
                    <div className="ml-5 flex gap-x-2 justify-between">
                      <h4 className="text-gray-800 font-light">{exp.role}</h4>
                      <span className="text-gray-800 font-light italic">
                        {exp.period}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Projects */}
          <div className="flex flex-col gap-y-1">
            <h2 className="font-bold text-lg">Latest Projects</h2>
            <ul className="list-disc list-inside">
              {Data.projects.map((project, idx) => {
                return (
                  <li key={idx}>
                    <span className="inline-flex justify-between">
                      <a href={project.link}>
                        <span className="font-bold">{project.name}</span>{" "}
                      </a>
                      <a href={project.github} className="ml-2">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </span>
                    <div className="ml-5 flex gap-x-2 justify-between flex-col">
                      {/* <span className="text-gray-800 font-light italic">
                        {exp.period}
                      </span> */}
                      <ul className="list-decimal list-inside">
                        {project.description.map((val, idx) => {
                          return (
                            <li key={idx} className="text-gray-800 font-light">
                              {val}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
