import clsx from "clsx";
import { motion } from "motion/react";

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
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          style={{
            backgroundSize: "300% 100%",
          }}
          initial={{
            backgroundImage: "none",
            backgroundPosition: "0% 50%",
          }}
          whileHover={{
            backgroundImage:
              "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899, #3b82f6)",
            backgroundPosition: ["0% 50%", "100% 50%"],
            transition: {
              backgroundImage: { duration: 0 },
              backgroundPosition: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              },
            },
          }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "flex items-center justify-center",
            "rounded-full p-0.5",
          )}
        >
          <div
            key={skill}
            className={clsx(
              "cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm",
              "dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600",
            )}
          >
            {skill}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
