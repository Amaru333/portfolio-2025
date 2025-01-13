import Badge from "@/common/Badge";
import { Github, Figma } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";
import DownloadFile from "@/common/DownloadFile";

function WorkQuest() {
  const stacks = ["Next.js", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Figma"];
  const downloadableFiles = [
    {
      name: "Design Concept",
      link: "/projects/workquest/design_concept.pdf",
      file_name: "design_concept.pdf",
    },
    {
      name: "Design Critique",
      link: "/projects/workquest/design_critique.pdf",
      file_name: "design_critique.pdf",
    },
    {
      name: "Pre Usability Testing",
      link: "/projects/workquest/pre_usability_testing.pdf",
      file_name: "pre_usability_testing.pdf",
    },
    {
      name: "Usability Testing",
      link: "/projects/workquest/usability_testing.pdf",
      file_name: "usability_testing.pdf",
    },
    {
      name: "Presentation",
      link: "/projects/workquest/presentation.pptx",
      file_name: "presentation.pptx",
    },
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader
        title="WorkQuest"
        timeline="September 2024 - November 2024 (College Capstone Project)"
      />
      <ProjectImageCarousel folder="workquest" count={9} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>
          A comprehensive redesign of an existing job search platform inspired by Craigslist Jobs,
          aimed at improving user experience, accessibility, and functionality. This project
          includes enhanced features, better visual design, and a more intuitive user interface to
          assist users in finding jobs efficiently. It also offers four different languages for the
          user to choose from.
        </p>
        <h3 className="text-2xl font-semibold mt-3">Project Details</h3>
        <ul className="mt-2">
          <li>
            <strong>Objective:</strong> To revamp the user experience of an outdated job search
            portal by improving navigation, design, and usability.
          </li>
          <li>
            <strong>Target Audience:</strong> Job seekers, especially students and recent graduates.
          </li>
          <li>
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside">
              <li>Job application tracking system with categorized statuses.</li>
              <li>Ability to upload resumes and profile information.</li>
              <li>Guest viewing mode for exploring job listings without registration.</li>
              <li>Filtering and searching jobs based on eligibility and payscale.</li>
              <li>Interactive messaging between applicants and employers.</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mt-3">Design Process</h3>
        <p>
          The project began with usability testing on wireframes and prototypes, gathering feedback
          from a diverse group of users. Key issues like navigation difficulties, lack of
          accessibility, and cluttered layouts were identified and addressed.
        </p>
        <p>
          Improvements included implementing a card-based design, enhancing the filtering system,
          adding a guest viewing mode, and streamlining the layout for better readability.
        </p>
        <iframe
          className="w-full aspect-video my-4"
          src="https://www.youtube.com/embed/nUEIXUD83t8?si=KYZBeLPY4dZdL4LA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3 className="text-2xl font-semibold mt-3">Technologies Used</h3>
        <ul className="list-disc list-inside">
          <li>Frontend: ReactJS, CSS, Figma for prototyping</li>
          <li>Backend: NodeJS, Express</li>
          <li>Tools: Postman for API testing, Visual Studio Code</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-3">Key Achievements</h3>
        <p>
          The redesign was positively received during post-testing, with users praising the improved
          navigation and usability. The changes successfully addressed initial pain points, creating
          a more user-friendly experience.
        </p>
        <h3 className="text-2xl font-semibold mt-3 mb-2">Feasibility Study</h3>
        <div className="flex flex-row gap-x-4 flex-wrap">
          {downloadableFiles.map((file) => (
            <DownloadFile key={file.name} {...file} />
          ))}
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/work-quest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/work-quest-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Backend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.figma.com/design/Q8mrgcyloqHv5GoR74obnB/Job-search-portal-Design?node-id=0-1&t=VEjRCSXKPB8jMpw2-1"
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

export default WorkQuest;
