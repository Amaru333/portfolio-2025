import Badge from "@/common/Badge";
import { Github, Figma } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";
import DownloadFile from "@/common/DownloadFile";

function RecipeApp() {
  const stacks = ["React", "Figma"];
  const downloadableFiles = [
    {
      name: "Recipe App Design Critque",
      link: "/projects/recipe-app/Recipe_App_Design_Critque.pdf",
      file_name: "Recipe_App_Design_Critque.pdf",
    },
    {
      name: "Recipe App Design Concept",
      link: "/projects/recipe-app/Recipe_App_Design_Concept.pdf",
      file_name: "Recipe_App_Design_Concept.pdf",
    },
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="Recipe App" timeline="September 2024 (College Project)" />
      <ProjectImageCarousel folder="recipe-app" count={3} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>
          Recipe App is a simple recipe application that allows users to create, edit, and delete
          recipes. The app is designed to be user-friendly and intuitive, with a clean and
          minimalistic interface. Users can organize their recipes by category and easily search for
          specific recipes using the search bar and filter by ingredients.
        </p>
        <h3 className="text-2xl font-semibold mt-3">Project Details</h3>
        <ul className="mt-2">
          <li>
            <strong>Objective:</strong> To create a user-friendly recipe-taking application with a
            clean and minimalistic interface.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mt-3">Design Process</h3>
        <p>
          The design process involved conducting user research to identify pain points and areas for
          improvement in the existing recipe-taking applications. The redesign focused on improving
          usability, accessibility, and overall user experience.
        </p>
        <iframe
          className="w-full aspect-video my-4"
          src="https://www.youtube.com/embed/sj9cjzflxNY?si=evhfDNO9hny5rVor"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3 className="text-2xl font-semibold mt-3">Technologies Used</h3>
        <ul className="list-disc list-inside">
          <li>Frontend: ReactJS, CSS, Figma for prototyping</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-3 mb-2">Feasibility Study</h3>
        <div className="flex flex-row gap-4 flex-wrap">
          {downloadableFiles.map((file) => (
            <DownloadFile key={file.name} {...file} />
          ))}
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/recipe-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.figma.com/design/mbdPE8vQqVhid6Fd5BkVCz/Untitled?node-id=0-1&t=JHXDrk29X5R4NCky-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma className="mr-2 h-4 w-4" />
              Figma Design
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RecipeApp;
