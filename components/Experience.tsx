import { ExperienceId } from "@/config/sectionId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Data from "@/assets/data/data.json";

export default function Experience() {
  return (
    <section className="w-full relative mt-10" id={ExperienceId}>
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Work Experience
        </h2>
        <div className="h-[1px] w-full bg-gray-700 my-2 rounded-full"></div>
        <div className="my-4">
          {/* experience tree */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-16 md:before:translate-x-[4.7rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {Data.experience.map((exp, idx) => {
              return (
                <div className="relative" key={idx}>
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className={idx === 0 ? "text-emerald-500" : ""}
                        />
                      </div>
                      <time className="font-caveat font-medium text-xl text-purple-500 md:w-28">
                        {exp.startDate}
                      </time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      joined{" "}
                      <a className="text-slate-900 font-bold" href={exp.link}>
                        {exp.organization}
                      </a>{" "}
                      as {exp.role}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {exp.responsibilities.map((responsibility, idx) => {
                      return responsibility + " ";
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSectionHomeLayout() {
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="h-10 md:h-0"></div>
      <Experience />
      <div className="h-10 md:h-0"></div>
    </div>
  );
}
