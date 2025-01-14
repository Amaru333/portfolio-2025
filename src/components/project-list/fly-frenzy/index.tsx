import Badge from "@/common/Badge";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectHeader from "@/common/ProjectHeader";
import ProjectImageCarousel from "@/common/ProjectImageCarousel";

function FlyFrenzy() {
  const stacks = ["Next.js", "Tailwind CSS", "MongoDB", "Vercel", "Flask", "Python", "Courier"];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader title="FlyFrenzy" timeline="April 2023 (Courier Hackathon)" />
      <ProjectImageCarousel folder="fly-frenzy" count={3} />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <p className="text-xl font-bold">🏆 Courier Hacks: Python Programs Winner!</p>
        <Button asChild className="my-3">
          <a
            href="https://devpost.com/software/fly-frenzy-automated-cheap-flight-fare-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View on Devpost
          </a>
        </Button>
        <p>
          Fly Frenzy is a web application which finds the cheapest flight ticket price between two
          cities. The user can even subscribe to notifications, which notifies them whenever
          there&apos;s a cheaper option available between those two cities. The user gets an email
          and SMS with price, how much cheaper it is compared to the last time they saw the price,
          and even a link to the booking website. All these without signing up or any such lengthy
          processes.
        </p>
        <p className="text-2xl font-semibold mt-8">How I built</p>
        <div className="mt-2">
          <p>We&apos;ve used the following technologies to build our application:</p>
          <ul className="list-disc list-inside mt-2">
            <li>NextJS for front-end</li>
            <li>Python + Flask for back-end API and cron job</li>
            <li>MongoDB for database Courier for sending notifications</li>
          </ul>
          <p className="mt-2">
            The user first gets to the homepage, where he has to select his origin, destination and
            date of travel. Once they click on the &quot;Search Cheapest Flight&quot; button,
            they&apos;ll be redirected to flight details page. Here once the page is loaded, the GET
            /flight-price API is called. This API requires the origin and destination&apos;s IATA
            code (International Air Transport Association), and the travel date. The IATA code of
            all active US airports are stored in a JSON file in the front end, including other
            airport details such as ICAO code, name, city, etc. These details are then sent to
            Skyscanner API, which returns all the bookings available on that particular day from
            different airline and travel agency websites. The data sent by skyscanner contains
            various fields like airport details, price, itinerary legs, carrier details, etc. In the
            backend, we sort the list by price, and extract several details like number of stops,
            arrival time, departure time, flight time, airline details, etc. Then the cheapest
            flight&apos;s data along with the other extracted data is saved into a database, and
            also sent back to the front-end where it is displayed to the user. Now the user can see
            the flight details, and also gets an option to subscribe to notifications. When user
            enters their details (email and mobile number) and clicks on &quot;Subscribe&quot;, the
            POST /flight-price-subscribe API is called which stores the details in database relevant
            to their search query. In the background, a cron job is running which checks the price
            of tracked queries once in a while. This calls the check_flight_price() function which
            queries calls Skyscanner API and gets details of all the queries one by one. Then it
            checks for the price stored for that particular query in database. If the new price is
            lower, then the new details are extracted and replaces the previous details in database.
            It then checks for the subscribed users list in that query. By using Courier API, an
            email and SMS is sent to the user regarding price drop. The message contains the new
            price, old price, and even the link for booking the flight.
          </p>
        </div>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/flight_tracker_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Frontend)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Amaru333/flight_tracker_backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub (Backend)
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://flight-tracker-frontend.vercel.app/"
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

export default FlyFrenzy;
