import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import data from "../data/ProjectList.json";
import RenderCard from "./RenderCard";

export interface Project {
  image: string;
  title: string;
  description: string;
  tag: string[];
  slug: string;
}

function Projects() {
  const filters = ["all", "web", "mobile", "design"];
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredData = data.filter((project: Project) => {
    if (selectedFilter === "all") return true;
    return project.tag.includes(selectedFilter);
  });

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto pb-16">
      <p className="text-5xl text-center font-semibold py-6">projects</p>
      <div className="flex items-center justify-center space-x-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`${
              selectedFilter === filter ? "" : ""
            } relative rounded-full text-white px-3 py-1.5 transition`}
          >
            {selectedFilter === filter && (
              <motion.div
                className="absolute inset-0 bg-black dark:bg-white"
                style={{ borderRadius: 9999 }}
                layoutId="pill"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 mix-blend-exclusion">{filter}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-8 mt-8">
        <AnimatePresence>
          {filteredData.map((project) => (
            <RenderCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
