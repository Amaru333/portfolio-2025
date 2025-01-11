import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
    <section
      id="projects"
      className="h-screen w-full flex items-center justify-center max-w-screen-2xl mx-auto"
    >
      <motion.div
        className="grid grid-cols-12 w-full gap-x-16"
        style={{ scale, opacity }}
        ref={sectionDiv}
      >
        <motion.div className="flex flex-col justify-center items-end gap-8 col-span-4">
          <p className="text-8xl font-semibold">projects</p>
          <Link
            to="/projects"
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-slate-950 dark:bg-slate-50 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-slate-950 dark:bg-slate-50 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left flex items-center gap-x-1 text-slate-950 dark:text-slate-50 transition-colors duration-200 ease-in-out group-hover:text-gray-50 group-hover:dark:text-gray-900">
              view all <ChevronRight size={18} />
            </span>
            <span className="absolute inset-0 border-2 border-black dark:border-white rounded-full"></span>
          </Link>
        </motion.div>
        <div className="grid grid-cols-4 grid-rows-3 h-full col-span-8">
          <div className="col-span-2">
            <div className="aspect-w-16 aspect-h-9">
              <img src="/project-headers/medverse.png" alt="project" className="object-cover" />
            </div>
          </div>
          <div className="col-span-2 col-start-3">
            <div className="aspect-w-16 aspect-h-9">
              <img src="/project-headers/workquest.png" alt="project" className="object-cover" />
            </div>
          </div>
          <div className="row-span-2 row-start-2">
            <div className="">
              <img src="/project-headers/payshare.png" alt="project" />
            </div>
          </div>

          <div className="row-span-2 row-start-2">
            <div className="">
              <img src="/project-headers/pizza.png" alt="project" />
            </div>
          </div>
          <div className="col-span-2 row-start-2">
            <div className="">
              <img src="/project-headers/meducate.png" alt="project" />
            </div>
          </div>
          <div className="col-span-2 col-start-3 row-start-3">
            <div className="">
              <img src="/project-headers/fly-frenzy.png" alt="project" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionTwo;
