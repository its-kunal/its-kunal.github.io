import { notFound } from "next/navigation";
import React from "react";
import Data from "@/assets/data/data.json";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "./ImageComponent";

export async function generateStaticParams() {
  return Data.projects.map((project) => ({
    id: project.key,
  }));
}

function SectionContent({
  project,
  id,
}: {
  project: {
    key: string;
    name: string;
    techStack: never[];
    description: string[];
    link: string;
    github: string;
    tag: string[];
  };
  id: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-2 lg:px-0">
      <h1 className="text-3xl font-bold capitalize mb-2 pt-4">
        {project.name.toLowerCase()}
      </h1>
      <div className="flex space-x-2 justify-start items-center mb-2">
        <a href={project.github}>
          <div className="py-1 px-2 rounded-full bg-gray-100 hover:bg-gray-200 flex space-x-2 items-center">
            <FontAwesomeIcon icon={faGithub} className="h-5 aspect-square" />
            <p className="text-xs">GitHub Link</p>
          </div>
        </a>
        <a href={project.link}>
          <div className="py-1 px-2 rounded-full bg-gray-100 hover:bg-gray-200 flex space-x-2 items-center">
            <FontAwesomeIcon
              icon={faWindowMaximize}
              className="h-5 aspect-square"
            />
            <p className="text-xs">View Project</p>
          </div>
        </a>
      </div>
      <div className="rounded-md w-full overflow-hidden shadow border border-gray-200 my-4">
        <ImageComponent id={id} />
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">Project Description</h2>
        <ul className="list-inside list-disc">
          {project.description.map((point, idx) => {
            return <li key={idx}>{point}</li>;
          })}
        </ul>
      </div>
      <div className="mb-4 text-xl font-semibold">
        <h2 className="mb-2">Tech Stack</h2>
        <ul className="list-inside list-disc">
          {project.techStack.map((point, idx) => {
            return <li key={idx}>{point}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

function BackDrop() {
  return (
    <div className="absolute -z-10 inset-0 overflow-hidden">
      <div className="h-52 w-52 bg-green-200 absolute top-[27%] left-[63%] blur-3xl m-20"></div>
      <div className="h-44 w-44 bg-yellow-200 absolute top-[1%] left-[36%] blur-3xl m-20"></div>
      <div className="h-52 w-52 bg-amber-200 absolute top-[9%] left-[13%] blur-3xl m-20 opacity-75"></div>
      <div className="h-36 w-36 bg-fuchsia-200 absolute top-[56%] left-[35%] blur-3xl m-20"></div>
      <div className="h-52 w-52 bg-orange-200 absolute top-[53%] left-[1%] blur-3xl m-20"></div>
      <div className="h-52 w-52 bg-rose-100 absolute top-[66%] left-[80%] blur-3xl m-20"></div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = Data.projects.filter((proj) => proj.key === id).at(0);
  if (project === undefined) {
    notFound();
  }
  return (
    <div className="relative min-h-screen">
      <SectionContent project={project} id={id} />
      <BackDrop />
    </div>
  );
}
