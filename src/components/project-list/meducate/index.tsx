import Badge from "@/common/Badge";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";

function Meducate() {
  const stacks = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux Toolkit",
    "Vercel",
    "ShadCN",
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="Meducate" timeline="July 2024 (Medihacks Hackathon)" />
      <ProjectImageCarousel folder="meducate" count={8} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>
          Meducate is an online learning platform for Front Line medical professional, who can
          enroll in courses and keep themselves up to date with their practices to make sure that
          they don&apos;t go out of touch with their knowledge. It provides a certificate in the end
          with a validity of certain time period, after which they may have to take the course again
          to make sure that their knowledge stays in place. It even offers in video quizzes, which
          tests their knowledge according to what they&apos;ve learnt. This helps in their hybrid
          mode of their work, where they can continue working in real life at hospitals, clinics,
          etc while learning the theoretical part of their course online, and getting certified.
        </p>
        <p className="text-2xl font-semibold mt-8">How I built</p>
        <p>
          The front end framework used for this application is NextJs, with Typescript. For styling,
          we used TailwindCSS library. For backend, we used NodeJS with ExpressJS. And for Database,
          we used MongoDB Apart from these, we used several libraries like Redux Toolkit for global
          state management in front end, Bcryptjs library for securely storing the passwords in
          database and jsonwebtoken library for keeping the user logged in at all time and making
          sure that all API calls are made by the legitimate logged in user.
        </p>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/meducate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/meducate-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Backend)
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://devpost.com/software/meducate-6s1z7p"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Devpost
            </a>
          </Button>
          <Button asChild>
            <a href="https://meducate-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Meducate;
