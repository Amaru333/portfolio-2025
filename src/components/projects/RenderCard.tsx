import { motion } from "motion/react";
import { Project } from ".";
import Link from "next/link";

function RenderCard({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.slug}
      className="col-span-1"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="h-48 bg-slate-200 dark:bg-slate-900 p-2 flex items-center justify-center rounded-xl relative">
          <div className="absolute top-0 right-0 p-3 flex space-x-1">
            {project.tag.map((tag) => (
              <p
                key={tag}
                className={`capitalize text-white text-xs ${
                  tag === "web"
                    ? "bg-blue-500"
                    : tag === "mobile"
                    ? "bg-green-500"
                    : tag === "design"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                } px-2 py-1 rounded-full`}
              >
                {tag}
              </p>
            ))}
          </div>
          <img
            src={`/project-headers/` + project.image}
            alt="project"
            className="w-full object-contain h-full"
          />
        </div>
        <div className="ml-2 mt-2">
          <p className="text-lg font-semibold">{project.title}</p>
          <p className="text-sm font-light line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default RenderCard;
