import React, { useState } from "react";
import img1 from "../assets/images/travera.jpg";
import img2 from "../assets/images/student-erp.jpg";
import img3 from "../assets/images/mybus.jpg";
import img4 from "../assets/images/evrex.jpg";
import img5 from "../assets/images/technoboot.jpg";
import img6 from "../assets/images/gfg.svg";
import img7 from "../assets/images/gdg.png";
import img8 from "../assets/images/dev.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Travera MERN stack",
      description: "MERN stack with Typescript",
      img: img1,
    },
    {
      id: 2,
      title: "Student ERP",
      description: "Student Management for Institutes",
      img: img2,
    },
    {
      id: 3,
      title: "My Bus",
      description: "Track, Locate, Buses in any device",
      img: img3,
    },
  ];
  const Internships = [
    {
      id: 1,
      title: "Google Assistant Integration",
      description:
        "Integrated Google Assistant with existing application running on firebase.",
      img: img4,
    },
    {
      id: 2,
      title: "Web Developer",
      description:
        "Create web applications using React, Redux with tools like BitBucket, Git",
      img: img5,
    },
  ];
  const Communities = [
    {
      id: 1,
      title: "Geeks For Geeks",
      description:
        "Loved this Community most for articles, hackathons and memes.",
      img: img6,
    },
    {
      id: 2,
      title: "Google Developer Groups Raipur",
      description:
        "Local Developer Community. Great Folks, Vibrant and Growing tech community.",
      img: img7,
    },
    {
      id: 2,
      title: "dev.to",
      description:
        "Great place to find blogs on possibly any tech stack, topic and development methods",
      img: img8,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">
          Projects, Internships & Communities
        </h1>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Internships
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Communities
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}

          {durum === 2
            ? Internships.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
          {durum === 3
            ? Communities.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;
