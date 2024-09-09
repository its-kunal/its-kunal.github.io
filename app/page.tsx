import AppBar from "@/app/components/AppBar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Resume from "@/app/components/Resume";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBar />
      <Hero />
      <Resume />
      <Projects />
      <Experience />
      <Contact />
      <div className="h-32 md:h-0"></div>
    </div>
  );
}
