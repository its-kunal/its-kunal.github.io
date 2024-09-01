import Image, { StaticImageData } from "next/image";
import HeroImage from "@/app/assets/hero.png";
import { ProjectsId } from "@/app/config/sectionId";

export default function ProjectsSection() {
  return (
    <section className="w-full relative mt-10" id={ProjectsId}>
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        <h2 className="text-center text-4xl font-bold">Projects</h2>
        <div className="h-[1px] w-full bg-gray-300 mt-2 mb-4 rounded-full"></div>
        <div>
          <Project
            projectdetails={{
              description: "",
              github: "",
              image: HeroImage,
              link: "",
              name: "Chatterbox",
            }}
          />
        </div>
      </div>
    </section>
  );
}

interface ProjectType {
  name: string;
  description: string;
  link: string;
  github: string;
  image: StaticImageData;
}

function Project({ projectdetails }: { projectdetails: ProjectType }) {
  return (
    <div className="rounded-sm shadow w-56">
      <Image
        src={projectdetails.image}
        alt={projectdetails.name}
        height={300}
        width={300}
        className="h-40 aspect-square w-full object-fill"
      />
      <div className="p-2">
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          {projectdetails.name}
        </h1>
        <p className="text-sm">{projectdetails.description}</p>
        <div className="flex gap-2 mt-2">
          <a
            href={projectdetails.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-200 px-2 py-1 rounded-sm text-sm font-semibold"
          >
            View Project
          </a>
          <a
            href={projectdetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-200 px-2 py-1 rounded-sm text-sm font-semibold"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
