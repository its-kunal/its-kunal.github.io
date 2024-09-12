import { ProjectsId } from "@/app/config/sectionId";
import Data from "@/app/assets/data/data.json";
import ProjectCard from "./Card";

export default function ProjectsSection() {
  return (
    <section className="w-full relative mt-10" id={ProjectsId}>
     
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        <h2 className="text-center text-4xl font-bold">Latest Projects</h2>
        <div className="h-[1px] w-full bg-gray-700 my-2 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 justify-stretch my-4">
          {Data.projects.map((val, idx) => {
            return (
              <ProjectCard
                name={val.name}
                github={val.github}
                link={val.link}
                Projectkey={String(val.key)}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectSectionHomeLayout(){
  return <div className="flex flex-col min-h-[100vh] justify-center items-center">
     <div className="h-10 md:h-0"></div>
    <ProjectsSection/>
    <div className="h-10 md:h-0"></div>
  </div>
}