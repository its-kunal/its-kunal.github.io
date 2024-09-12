import AppBar from "@/app/components/AppBar";
import Hero from "@/app/components/Hero";
import { ProjectSectionHomeLayout } from "@/app/components/Project/Projects";
import Resume from "@/app/components/Resume";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col">
      {/* Color balls for 1st sections */}
      <>
        <div className="absolute top-[100px] left-0 h-20 w-20 bg-teal-300"></div>
        <div className="absolute top-[150px] left-1/3 h-10 w-10 bg-yellow-400"></div>
        <div className="absolute top-[200px] left-2/3 h-60 aspect-square rounded-full bg-indigo-400 "></div>
        <div className="absolute top-[400px] left-1/3 h-24 w-24 bg-blue-500 "></div>
        <div className="absolute top-[500px] left-1/3 h-24 w-24 bg-green-500 "></div>
        <div className="absolute top-[740px] -right-20 h-20 w-96 bg-rose-300 "></div>
        <div className="absolute top-[820px] -left-10 rotate-45 h-10 w-72 bg-pink-300 "></div>
        <div className="absolute top-0 right-2/3 aspect-square h-20 w-20 bg-fuchsia-100"></div>
        <div className="absolute top-0 right-1/3 aspect-square h-20 w-20 bg-yellow-100"></div>
        <div className="absolute top-0 right-10 aspect-square h-20 w-20 bg-fuchsia-300"></div>
      </>
      <AppBar />
      <div className="flex-1 flex flex-col backdrop-blur-3xl">
        <Hero />
        <Resume />
        <ProjectSectionHomeLayout />
        <Experience />
        <Contact />
        <div className="h-32 md:h-0"></div>
      </div>
    </div>
  );
}
