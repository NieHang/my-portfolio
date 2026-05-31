import CatImg from "@/assets/cat.jpg";

export default function Personal({ sectionId }: { sectionId: string }) {
  return (
    <section id={sectionId} className="mb-10 flex items-end justify-between">
      <div className="flex flex-2 flex-col align-bottom">
        <h1 className="text-9xl text-gray-950 dark:text-white">Web</h1>
        <h1 className="text-9xl text-gray-950 dark:text-white">Developer</h1>
      </div>
      <div className="flex flex-1 flex-col items-end">
        <img
          src={CatImg}
          alt="Cat"
          className="h-80 w-60 rounded-xl object-cover"
        />
        <p className="mt-4 text-right text-gray-950 dark:text-white">
          Hi, I am Hang, a web developer with a passion for creating beautiful
          and functional websites. I have experience in HTML, CSS, JavaScript,
          and React.
        </p>
      </div>
    </section>
  );
}
