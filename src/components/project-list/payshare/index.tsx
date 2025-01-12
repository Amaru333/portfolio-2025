import Badge from "@/common/Badge";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";

function PayShare() {
  const stacks = [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux Toolkit",
  ];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="PayShare" timeline="July 2024 - August 2024" />
      <ProjectImageCarousel folder="payshare" count={11} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p>
          PayShare is a platform designed to simplify expense sharing among friends and groups. It
          helps users to split bills, track expenses, and settle debts effortlessly.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <span className="font-semibold">User Authentication:</span> Users can sign up or log in
            through email using One Time Password (OTP), eliminating the need for passwords.
          </li>
          <li>
            <span className="font-semibold">Expense Tracking:</span> Users can create groups, add
            expenses, and split bills among group members.
          </li>
          <li>
            <span className="font-semibold">Settlements:</span> Users can settle debts with group
            members using a simplified interface.
          </li>
          <li>
            <span className="font-semibold">Real-time Updates:</span> All group members receive
            real-time updates on expenses and settlements.
          </li>
        </ul>
        <p className="text-2xl font-semibold mt-8">How I built</p>
        <div className="mt-2">
          <b className="text-lg">Frontend:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">React Native with Expo:</span> For building the mobile
              app.
            </li>
            <li>
              <span className="font-semibold">Redux Toolkit:</span> For state management.
            </li>
            <li>
              <span className="font-semibold">Expo Navigation:</span> For routing and navigations
              such as Stack Navigation, Bottom Bar Navigation.
            </li>
            <li>
              <span className="font-semibold">Axios:</span> For making API requests.
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <b className="text-lg">Backend:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Node.js with Express:</span> For handling server-side
              logic and database interactions.
            </li>
            <li>
              <span className="font-semibold">MongoDB with Mongoose:</span> For storing user data,
              group data, and expenses.
            </li>
            <li>
              <span className="font-semibold">JWT Authentication:</span> For token-based security
              and session handling.
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <b className="text-lg">APIs:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed RESTful APIs for user authentication, group management, expense tracking,
              settlements, and so on.
            </li>
            <li>Implemented middleware for API protection.</li>
            <li>
              Utilized the Nodemailer library to handle the automated email functionality, enabling
              the delivery of OTPs directly to users&apos; inboxes.
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <b className="text-lg">Dev Tools:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Postman:</span> For API testing.
            </li>
            <li>
              <span className="font-semibold">GitHub:</span> For version control and collaboration.
            </li>
          </ul>
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/payshare-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/payshare-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Backend)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PayShare;
