import BorderButton from "@/components/common/BorderButton";
import { motion } from "motion/react";
import OpenriceImg from "@/assets/openrice.png";
import OpenjobsImg from "@/assets/openjobs.png";
import PolyImg from "@/assets/polymarket-liquidity.png";
import VirtualImg from "@/assets/virtual-launch.png";
import clsx from "clsx";

export default function About() {
  const imgs = [
    {
      src: OpenriceImg,
      alt: "Openrice",
      href: "https://www.openrice.com",
      title: "OPENRICE",
      desc: "OpenRice is a leading online restaurant guide and reservation platform in Asia, providing users with comprehensive information on dining options, reviews, and the ability to make reservations at various restaurants.",
    },
    {
      src: OpenjobsImg,
      alt: "Openjobs",
      href: "https://www.openjobs.com",
      title: "OPENJOBS",
      desc: "OpenJobs is a job search platform that connects job seekers with employers, offering a wide range of job listings and career opportunities across various industries and locations.",
    },
    {
      src: PolyImg,
      alt: "Polymarket",
      href: "https://polymarket.com",
      title: "POLYMARKET_LIQUIDITY",
      desc: "This is a tool that collects liquidity reward from polymarket. It helps me post orders and cancel orders automatically, which save me a lot of time and effort.",
    },
    {
      src: VirtualImg,
      alt: "Virtual Launch",
      href: "https://github.com/NieHang/virtual-launch",
      title: "VIRTUAL_LAUNCH",
      desc: "This is a tool that provide some project information such as collected tax, FDV, etc. It helps me earn more than 10k USD in the past 6 months.",
    },
  ];
  return (
    <section className="mt-10 flex flex-col">
      <BorderButton>About Me</BorderButton>
      <div className="mt-5 mb-10 flex items-end justify-between gap-40">
        <div className="flex-2 text-4xl">
          Developing has always been more than a job - it's my passion.
        </div>
        <div className="flex-1 text-sm text-gray-500">
          I love turning ideas into reality through code.
        </div>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div className="grid flex-2 grid-cols-2 gap-6">
          {imgs.map((img, index) => (
            <div key={index}>
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                href={img.href}
                target="_blank"
                className={clsx(
                  "flex items-center justify-center rounded-lg border p-4",
                )}
              >
                <img src={img.src} alt={img.alt} />
              </motion.a>
              <div className="mt-2 flex flex-col gap-3">
                <div className="text-lg font-bold">{img.title}</div>
                <div className="text-sm text-gray-500">{img.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
