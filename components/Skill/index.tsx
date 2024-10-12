import { SkillId } from "@/config/sectionId";
import TreeMap from "./TreeMap";
import data from "./data";

function SkillSectionLayout() {
  return (
    <section id={SkillId} className="w-full relative mt-10">
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Skills
        </h2>
        <div className="h-[1px] w-full bg-gray-700 my-2 rounded-full"></div>
        <div className="my-4">
          <TreeMap data={data} />
        </div>
      </div>
    </section>
  );
}

export default function index() {
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="h-10 md:h-0"></div>
      <SkillSectionLayout />
      <div className="h-10 md:h-0"></div>
    </div>
  );
}
