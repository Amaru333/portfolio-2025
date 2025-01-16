import Badge from "@/common/Badge";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";

function Splitly() {
  const stacks = [
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "MongoDB",
    "Vercel",
    "Node.js",
    "Express",
    "Courier",
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="Splitly" timeline="November 2022 (Courier Hackathon)" />
      <ProjectImageCarousel folder="splitly" count={6} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p className="text-xl font-bold">🏆 Courier Hacks: Feature Focus Winner!</p>
        <Button asChild className="my-3">
          <a
            href="https://devpost.com/software/splitly-dm9y8o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View on Devpost
          </a>
        </Button>
        <p>
          Everyone wants to keep a track of their expenditures and need to know how much they spend.
          It&apos;s so easy to get caught up in the bills, but it can be hard to keep track of what
          you&apos;re spending money on, especially when you&apos;re out with friends. SplitLY also
          calculates what you&apos;ve spent so far and helps you keep track of your expenses when
          the bill comes in, at least you know where to start looking for ways to cut back!
        </p>
        <p className="mt-2">
          You can add your daily spends into the app and it keeps a track of it. You can get
          insights from graphs regarding how much you&apos;re spending. Get notification on mail and
          messages when you exceed your set spend limit of the month.
        </p>
        <p className="text-2xl font-semibold mt-8">How I built</p>
        <div className="mt-2">
          <p>We&apos;ve used the following technologies to build our application:</p>
          <ul className="list-disc list-inside mt-2">
            <li>NextJS with Typescript for front-end and TailwindCSS for styling</li>
            <li>NodeJS + Express for back-end API</li>
            <li>MongoDB for database Courier for sending notifications</li>
          </ul>
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a href="https://github.com/Amaru333/splitly" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/splitly-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Backend)
            </a>
          </Button>
          <Button asChild>
            <a href="https://splitly.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Splitly;
