import Header from "@/components/Header/Header";
import Personal from "@/components/Personal/Personal";

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
  ]
  return <section className="bg-white dark:bg-gray-950 pl-10 pr-10 pt-6 pb-6">
    <Header navs={navs} />
    <Personal sectionId={navs[0].name} />
  </section>
}