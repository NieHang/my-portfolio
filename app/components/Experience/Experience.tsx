import BorderButton from "@/components/common/BorderButton";

import clsx from "clsx";

export default function Experience({ sectionId }: { sectionId: string }) {
  const experiences = [
    {
      title: "Web Developer at Openrice",
      desc: "Developed and maintained the Openrice & Openjobs website, ensuring a seamless user experience for millions of users across Asia.",
      time: "2019 - Present",
    },
    {
      title: "Junior Web Developer at TechStart",
      desc: "Developed wechat mini program for a local restaurants and shops, which help their customers make orders more efficiently.",
      time: "2018 - 2019",
    },
  ];
  return (
    <section id={sectionId} className="mt-10 flex flex-col">
      <BorderButton>Experience</BorderButton>
      <div className="mt-5 mb-10 flex items-end justify-between gap-40">
        <div className="flex-2 text-4xl">
          A Yearly snapshot of my journey in the world of development.
        </div>
        <div className="flex-1 text-sm text-gray-500">
          An annual overview that summarizes my journey.
        </div>
      </div>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={clsx(
              "flex cursor-pointer items-center justify-between py-4",
              "border-b border-gray-200",
              "last:border-b-0",
              "hover:bg-gray-100",
            )}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-sm text-gray-500">{experience.desc}</p>
            </div>
            <p className="flex-1 text-right text-2xl font-medium">
              {experience.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
