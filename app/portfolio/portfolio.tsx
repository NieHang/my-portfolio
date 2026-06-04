import Header from "@/components/Header/Header";
import Personal from "@/components/Personal/Personal";
import SkillSection from "@/components/SkillSection/SkillSection";
import About from "@/components/About/About";

export default function Portfolio() {
  const navs = [
    {
      id: 1,
      name: "Personal",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Experiences",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  return (
    <section className="bg-white pt-6 pr-10 pb-6 pl-10 dark:bg-gray-950">
      <Header navs={navs} />
      <Personal sectionId={navs[0].name} />
      <SkillSection />
      <About sectionId={navs[1].name} />
    </section>
  );
}
