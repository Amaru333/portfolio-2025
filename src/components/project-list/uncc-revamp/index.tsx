import Badge from "@/common/Badge";
import { Figma } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";
import DownloadFile from "@/common/DownloadFile";

function UNCCRevamp() {
  const stacks = ["Figma"];
  const downloadableFiles = [
    {
      name: "Persona Updating Interviews.pdf",
      link: "/projects/uncc-revamp/Persona_Updating_Interviews.pdf",
      file_name: "Persona_Updating_Interviews.pdf",
    },
    {
      name: "Project Milestone- Compilation of UNC Charlotte Admission and Financial Aid Website Critiques",
      link: "/projects/uncc-revamp/Project_Milestone_Compilation_of_UNC_Charlotte_Admission_and_Financial_Aid_Website_Critiques.pdf",
      file_name:
        "Project_Milestone_Compilation_of_UNC_Charlotte_Admission_and_Financial_Aid_Website_Critiques.pdf",
    },
    {
      name: "Project Milestone- Persona Update and Project Problem Statement.pdf",
      link: "/projects/uncc-revamp/Project_Milestone_Persona_Update_and_Project_Problem_Statement.pdf",
      file_name: "Project_Milestone_Persona_Update_and_Project_Problem_Statement.pdf",
    },
    {
      name: "Project Milestone- Wireframing Solutions for Design Project",
      link: "/projects/uncc-revamp/Project_Milestone_Wireframing_Solutions_for_Design_Project.pdf",
      file_name: "Project_Milestone_Wireframing_Solutions_for_Design_Project.pdf",
    },
    {
      name: "Project Milestone",
      link: "/projects/uncc-revamp/Project_Milestone.pdf",
      file_name: "Project_Milestone.pdf",
    },
    {
      name: "University Admission and Financial Aid Website Redesign Report.pdf",
      link: "/projects/uncc-revamp/university_admission_and_financial_aid_website_redesign_report.pdf",
      file_name: "university_admission_and_financial_aid_website_redesign_report.pdf",
    },
    {
      name: "Participant 1 Interview",
      link: "/projects/uncc-revamp/Participant_1.mp3",
      file_name: "Participant_1.mp3",
    },
    {
      name: "Participant 2 Interview",
      link: "/projects/uncc-revamp/Participant_2.mp3",
      file_name: "Participant_2.mp3",
    },
    {
      name: "Participant 3 Interview",
      link: "/projects/uncc-revamp/Participant_3.mp3",
      file_name: "Participant_3.mp3",
    },
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader
        title="UNCC Website Revamp"
        timeline="September 2024 - November 2024 (College Capstone Project)"
      />
      <ProjectImageCarousel folder="uncc-revamp" count={7} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>
          A comprehensive redesign of the University of North Carolina at Charlotte&apos;s (UNCC)
          website for admissions and financial aid. The project aimed to improve the user experience
          and accessibility of the website, making it easier for prospective students to navigate
          and find relevant information.
        </p>
        <h3 className="text-2xl font-semibold mt-3">Project Details</h3>
        <ul className="mt-2">
          <li>
            <strong>Objective:</strong> To revamp the user experience of the UNCC admissions and
            financial aid website.
          </li>
          <li>
            <strong>Target Audience:</strong> Prospective students, parents, and guidance
            counselors.
          </li>
          <li>
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside">
              <li>Improved navigation and accessibility.</li>
              <li>Enhanced filtering system for better search results.</li>
              <li>Guest viewing mode for non-registered users.</li>
              <li>Streamlined layout for better readability.</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mt-3">Design Process</h3>
        <p>
          The redesign process involved conducting user interviews, creating personas, and
          wireframing solutions to address the pain points identified in the existing website. The
          wireframes were then prototyped in Figma to visualize the changes before implementation.
        </p>
        <p>
          The project also included a feasibility study to assess the technical and financial
          viability of the proposed redesign. The study evaluated the resources required, potential
          challenges, and estimated costs for the project.
        </p>
        <h3 className="text-2xl font-semibold mt-3">Key Achievements</h3>
        <p>
          The project successfully identified user needs and pain points, leading to a more
          user-friendly design for the UNCC admissions and financial aid website. The wireframes and
          prototypes developed during the project provided a clear roadmap for implementing the
          redesign, ensuring a seamless user experience for prospective students.
        </p>
        <h3 className="text-2xl font-semibold mt-3 mb-2">Feasibility Study</h3>
        <div className="flex flex-row gap-4 flex-wrap">
          {downloadableFiles.map((file) => (
            <DownloadFile key={file.name} {...file} />
          ))}
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://www.figma.com/design/Jo0OqZYXn73DBC3V9FeMPK/UNCC-Admission-and-Financial-Aid-Redesign?node-id=0-1&t=btqVizfqXwK8UxK8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma className="mr-2 h-4 w-4" />
              Figma (Wireframe)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.figma.com/design/Jo0OqZYXn73DBC3V9FeMPK/UNCC-Admission-and-Financial-Aid-Redesign?node-id=136-2&t=btqVizfqXwK8UxK8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma className="mr-2 h-4 w-4" />
              Figma (High Fidelity)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UNCCRevamp;
