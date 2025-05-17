import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

function SectionTwo() {
  const changeValues = [0, 1];
  const scaleValues = [1, 1];
  const sectionDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section1ScrollY } = useScroll({
    target: sectionDiv,
  });
  const scale = useTransform(section1ScrollY, changeValues, scaleValues);
  const opacity = useTransform(section1ScrollY, changeValues, scaleValues);
  return (
    <section id="projects" className="h-screen w-full flex items-center justify-center max-w-screen-2xl mx-auto">
      <motion.div className="grid grid-cols-12 w-full gap-x-0 md:gap-x-16" style={{ scale, opacity }} ref={sectionDiv}>
        <motion.div className="flex flex-col justify-center md:items-end items-center mb-12 md:mb-0 md:gap-8 gap-0 col-span-12 md:col-span-4">
          <p className="text-6xl font-semibold">my works</p>
        </motion.div>
        <div className="h-full col-span-12 md:col-span-8 flex flex-col gap-y-12 items-center justify-center">
          <Link href="/projects" className="opacity-60 text-6xl font-medium flex items-center gap-x-2 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <p>projects</p>
            <ChevronRight size={36} className="mt-2" />
          </Link>
          <Link
            href="https://amaru333.github.io/hookies/"
            target="_blank"
            className="opacity-60 text-6xl font-medium flex items-center gap-x-2 hover:opacity-100 transition-opacity duration-200 ease-in-out"
          >
            <p>libraries</p>
            <ChevronRight size={36} className="mt-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionTwo;
