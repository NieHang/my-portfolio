import ArrowDouble from "@/assets/icons/arrow-double.svg";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";
import EmailIcon from "@/assets/icons/email.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:niehang77@gmail.com?subject=Hello%20from%20your%20site!",
    icon: EmailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/NieHang",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/b13a16237/",
    icon: LinkedInIcon,
  },
];

export default function Contact({ sectionId }: { sectionId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id={sectionId}
      className="relative mt-10 flex flex-col gap-8 bg-black p-10 md:flex-row md:items-start md:justify-between"
    >
      <div className="max-w-4xl text-6xl leading-none font-medium text-white md:text-8xl">
        <div>Let's</div>
        <div>Connect</div>
        <div>There!</div>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={clsx(
          "relative flex h-14 items-center overflow-hidden rounded-full",
          "bg-neutral-800 text-white ring-1 ring-white/10",
        )}
        variants={{
          closed: {
            width: 180,
            transition: {
              type: "spring",
              stiffness: 280,
              damping: 32,
            },
          },
          open: {
            width: 310,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 30,
            },
          },
        }}
      >
        <motion.a
          href={contactLinks[0].href}
          className={clsx(
            "relative z-10 flex h-14 w-40 shrink-0 items-center gap-3 rounded-full px-1.5",
            "text-sm font-medium whitespace-nowrap text-white outline-none",
            "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          )}
        >
          <motion.span
            className={clsx(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black",
              "ring-1 ring-white/10",
            )}
            variants={{
              closed: {
                rotate: 0,
              },
              open: {
                rotate: 45,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                },
              },
            }}
          >
            <img src={ArrowDouble} alt="" className="h-6 w-6" />
          </motion.span>
          <motion.span
            className="inline-block"
            variants={{
              closed: {
                x: 0,
                opacity: 1,
              },
              open: {
                x: -2,
                opacity: 0.9,
              },
            }}
          >
            Let's Build!
          </motion.span>
        </motion.a>

        <motion.div
          className="flex h-14 w-fit shrink-0 items-center gap-2 overflow-hidden p-2"
          variants={{
            closed: {
              opacity: 0,
              x: -12,
              transition: {
                duration: 0.12,
              },
            },
            open: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.18,
                ease: "easeOut",
                delayChildren: 0.04,
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              className={clsx(
                "flex h-10 min-w-10 items-center justify-center rounded-full",
                "bg-white/10 text-xs font-semibold text-white ring-1 ring-white/10",
                "hover:border hover:border-white/20",
              )}
              variants={{
                closed: {
                  x: -8,
                  opacity: 0,
                  scale: 0.94,
                },
                open: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 320,
                    damping: 26,
                  },
                },
              }}
            >
              <img src={link.icon} alt={link.label} className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
