import Badge from "@/components/Badge";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

function Medverse() {
  const stacks = [
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "MongoDB",
    "Redux Toolkit",
    "Vercel",
    "ShadCN",
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="Medverse" timeline="December 2024 (4 day - hackathon program)" />
      <ProjectImageCarousel folder="medverse" count={8} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>MedVerse is a medical education platform that provides:</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <span className="font-semibold">Course Management:</span> Offers structured courses with
            interactive lessons, quizzes, and assessments.
          </li>
          <li>
            <span className="font-semibold">Progress Tracking:</span> Tracks learning progress, quiz
            scores, and daily login streaks to encourage consistent learning habits.
          </li>
          <li>
            <span className="font-semibold">Certifications:</span> Generates downloadable
            certificates with QR codes for verification.
          </li>
          <li>
            <span className="font-semibold">Dynamic Content Delivery:</span> Allows learners to
            navigate through stages, lessons, and quizzes dynamically based on performance.
          </li>
          <li>
            <span className="font-semibold">Real-time Analytics:</span> Provides performance
            insights based on assessments and quizzes to measure learning outcomes.
          </li>
        </ul>
        <p className="text-2xl font-semibold mt-8">How I built</p>
        <p className="mt-2">
          <b className="text-lg">Frontend:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Next.js (React Framework):</span> For building a
              scalable, SSR-enabled user interface.
            </li>
            <li>
              <span className="font-semibold">Tailwind CSS:</span> For responsive design and rapid
              UI development.
            </li>
            <li>
              <span className="font-semibold">Axios:</span> For secure API communication with
              backend services.
            </li>
            <li>
              <span className="font-semibold">Redux Toolkit:</span> For global state management.
            </li>
          </ul>
        </p>
        <p className="mt-2">
          <b className="text-lg">Backend:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Node.js with Next.js API Routes:</span> For handling
              server-side logic and database interactions.
            </li>
            <li>
              <span className="font-semibold">MongoDB with Mongoose:</span> As the database to store
              users, courses, enrollments, and quiz data.
            </li>
            <li>
              <span className="font-semibold">JWT Authentication:</span> For token-based security
              and session handling.
            </li>
          </ul>
        </p>
        <p className="mt-2">
          <b className="text-lg">APIs:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed RESTful APIs for courses, enrollments, user authentication, and analytics.
            </li>
            <li>Implemented dynamic routing and middleware for API protection.</li>
          </ul>
        </p>
        <p className="mt-2">
          <b className="text-lg">Dev Tools:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Postman:</span> For API testing.
            </li>
            <li>
              <span className="font-semibold">Vercel:</span> For deployment and hosting.
            </li>
            <li>
              <span className="font-semibold">GitHub:</span> For version control and collaboration.
            </li>
          </ul>
        </p>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/minimed-hackathon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://minimed-hackathon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Medverse;
