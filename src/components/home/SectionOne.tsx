import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function SectionOne() {
  const section1ScrollConstant = 100;
  const section1LeftRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section1ScrollY } = useScroll({
    target: section1LeftRef,
  });
  const section1RightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section1RightScrollY } = useScroll({
    target: section1RightRef,
  });
  const moveSection1Left = useTransform(
    section1ScrollY,
    [1, 0],
    [section1ScrollConstant, -section1ScrollConstant]
  );
  const moveSection1Right = useTransform(
    section1RightScrollY,
    [0, 1],
    [0, 2 * section1ScrollConstant]
  );
  const opacity = useTransform(section1RightScrollY, [0, 1], [1, 0]);
  return (
    <main className="relative overflow-x-hidden">
      <section id="about" className="h-screen w-screen flex items-center justify-center">
        <div className="grid grid-cols-2 w-full gap-x-8">
          <motion.div
            className="flex justify-end items-center"
            ref={section1LeftRef}
            style={{ translateX: moveSection1Left, opacity }}
          >
            <p className="text-8xl font-semibold">i&apos;m a</p>
          </motion.div>
          <motion.div
            className="flex flex-col font-['Ubuntu_Mono'] justify-start text-4xl leading-[3.5rem] font-medium"
            ref={section1LeftRef}
            style={{ translateX: moveSection1Right, opacity }}
          >
            <p>web developer</p>
            <p>mobile app developer</p>
            <p>ui/ux designer</p>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 1, delay: 2, stiffness: 50 }}
        className="flex items-center justify-center h-screen w-screen absolute top-0 left-0 bg-white dark:bg-black z-50"
      >
        <h1 className="text-6xl font-semibold">amrutesh arun</h1>
      </motion.div>
    </main>
  );
}

export default SectionOne;
