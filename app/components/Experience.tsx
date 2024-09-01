import { ExperienceId } from "@/app/config/sectionId";

export default function Experience() {
  return (
    <section className="w-full relative mt-10" id={ExperienceId}>
      <div className="max-w-4xl md:mx-auto mx-2 z-10 backdrop-blur-3xl">
        <h2 className="text-center text-4xl font-bold">Experience</h2>
        <div className="h-[1px] w-full bg-gray-300 mt-2 mb-4 rounded-full"></div>
      </div>
    </section>
  );
}
