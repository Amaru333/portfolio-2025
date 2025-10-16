import Badge from '@/common/Badge';
import { Code } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ProjectHeader from '@/common/ProjectHeader';
import Link from 'next/link';

function NycAirportPowerBi() {
  const stacks = ['PowerBi', 'Data Visualization', 'Data Analysis'];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader
        title="Visualization of New York City Airport Traffic using PowerBi"
        timeline="September 2025 - October 2025"
      />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
        <Link
          target="_blank"
          className="text-blue-600 underline hover:text-blue-700"
          href="https://studentuncc-my.sharepoint.com/my?id=%2Fpersonal%2Faarun3%5Fcharlotte%5Fedu%2FDocuments%2Fflight%5Fdata%2Epbix&parent=%2Fpersonal%2Faarun3%5Fcharlotte%5Fedu%2FDocuments&ga=1"
        >
          Link to PowerBi Report
        </Link>
        <p className="text-2xl font-semibold mt-8">Audience & context:</p>
        <p>
          This report is intended for stakeholders in the aviation industry, including airport
          authorities, airline companies, and policymakers. The insights derived from the data can
          inform decisions related to airport operations, resource allocation, and strategic
          planning. Understanding trends in passenger and freight volumes can help optimize services
          and improve overall efficiency in response to market demands and external factors such as
          economic conditions and global events.
        </p>
        <p className="text-2xl font-semibold mt-8">KPIs chosen:</p>
        <ul className="list-disc list-inside">
          <li>Passenger Volume</li>
          <li>Freight Volume</li>
          <li>Air Traffic Movements</li>
        </ul>
        <p className="text-2xl font-semibold mt-8">Dashboard structure:</p>
        <ul className="list-disc list-inside">
          <li>Overview of total passenger and freight volumes by airport</li>
          <li>Monthly trends and seasonal patterns for each KPI</li>
          <li>Impact analysis of significant events (e.g., COVID-19 pandemic)</li>
          <li>Comparative analysis between airports</li>
        </ul>
        <p className="text-2xl font-semibold mt-8">Design Choices:</p>
        <p>
          The design of the dashboard prioritizes clarity and ease of use, with a clean layout and
          intuitive navigation. Visualizations are used to highlight key trends and insights, making
          it easy for users to grasp complex data at a glance. The color scheme is chosen to be
          visually appealing while maintaining accessibility standards.
        </p>
        <p className="text-2xl font-semibold mt-8">Reflection:</p>
        <p>
          This project provided valuable experience in data analysis and visualization using
          PowerBi. It highlighted the importance of understanding the context behind the data and
          the need to tailor visualizations to the target audience. The insights gained from this
          analysis can contribute to more informed decision-making in the aviation sector.
        </p>
        <p>
          This report analyzes the trends in monthly revenue passenger volume and monthly freight
          volume at New York&apos;s major airports (EWR, JFK, LGA, and SWF) from 2000 to 2024, based
          on the provided visualizations.
        </p>
        <p className="text-2xl font-semibold mt-8">Revenue Passenger Volume:</p>
        <p>
          The visualization of monthly revenue passenger volume clearly shows distinct trends for
          each airport. JFK consistently handles the highest passenger volume, followed by EWR and
          then LGA. SWF has a significantly lower passenger volume compared to the other three
          airports.
        </p>
        <p>
          All airports exhibit a strong seasonal pattern, with passenger volumes peaking during the
          summer months and decreasing in the winter. A notable observation is the significant drop
          in passenger volume across all airports starting in early 2020, coinciding with the onset
          of the COVID-19 pandemic. Passenger volumes have since been recovering, but the recovery
          rate and current levels vary by airport.
        </p>
        <img
          src="/projects/nyc-airport-powerbi/passenger.png"
          alt="NYC Airport Passenger Traffic"
          className="my-4 w-full object-contain"
        />
        <p className="text-2xl font-semibold mt-8">Freight Volume:</p>
        <p>
          The monthly freight volume visualization reveals different patterns compared to passenger
          volume. JFK also leads in freight volume, but the gap between JFK and EWR is less
          pronounced than for passenger volume. LGA and SWF have considerably lower freight volumes.
        </p>
        <p>
          The seasonal pattern in freight volume appears less pronounced than in passenger volume.
          The impact of the COVID-19 pandemic on freight volume seems different as well, with some
          fluctuations but not the drastic and sustained drop seen in passenger volume.
          Additionally, there appears to be a noticeable decrease in freight volume around 2008 for
          EWR and JFK, which coincides with the global economic crisis. While this suggests a
          potential correlation, further analysis would be needed to confirm a direct causal link.
          This highlights the differing nature of air travel for passengers versus cargo and how
          economic factors can influence freight.
        </p>
        <img
          src="/projects/nyc-airport-powerbi/freight.png"
          alt="NYC Airport Freight Traffic"
          className="my-4 w-full object-contain"
        />
        <p className="text-2xl font-semibold mt-8">Air Traffic Movements:</p>
        <p>
          The visualization of monthly air traffic movements shows that JFK and EWR handle the
          majority of air traffic in the New York area, with JFK leading. LGA has a moderate level
          of air traffic, while SWF has minimal activity.
        </p>
        <p>
          Similar to passenger volume, there is a significant drop in air traffic movements starting
          in early 2020 due to the COVID-19 pandemic. The recovery trend is also visible, but the
          levels have not yet returned to pre-pandemic figures.
        </p>
        <img
          src="/projects/nyc-airport-powerbi/air-traffic.png"
          alt="NYC Airport Air Traffic Movements"
          className="my-4 w-full object-contain"
        />
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://studentuncc-my.sharepoint.com/my?id=%2Fpersonal%2Faarun3%5Fcharlotte%5Fedu%2FDocuments%2Fflight%5Fdata%2Epbix&parent=%2Fpersonal%2Faarun3%5Fcharlotte%5Fedu%2FDocuments&ga=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="mr-2 h-4 w-4" />
              Power Bi Report
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NycAirportPowerBi;
