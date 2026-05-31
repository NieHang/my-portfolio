import clsx from "clsx";

export default function SkillSwiper() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
  ];
  return (
    <div className="flex items-center gap-2.5">
      {skills.map((skill) => (
        <div
          key={skill}
          className={clsx(
            "cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm",
            "hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
          )}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
