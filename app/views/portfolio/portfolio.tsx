import Personal from "@/components/Personal/Personal";
import SkillSection from "@/components/SkillSection/SkillSection";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Portfolio() {
  return (
    <section className="bg-white pt-6 pr-10 pb-6 pl-10 dark:bg-gray-950">
      <Personal />
      <SkillSection />
      <About />
      <Experience />
      <Contact />
    </section>
  );
}
