import Badge from '@/common/Badge';
import { Code } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ProjectHeader from '@/common/ProjectHeader';

function NycAirport() {
  const stacks = ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Google Colab'];
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen py-12">
      <ProjectHeader
        title="Analysis of Passenger and Freight Volume at New York Airports (2000-2024)"
        timeline="August 2025 - October 2025"
      />
      <div className="flex flex-wrap mt-4 gap-2 mb-8">
        {stacks.map((stack) => (
          <Badge key={stack} text={stack} />
        ))}
      </div>
      <div className="text-slate-800 dark:text-slate-200">
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
          src="/projects/nyc-airport/passenger.png"
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
          src="/projects/nyc-airport/freight.png"
          alt="NYC Airport Freight Traffic"
          className="my-4 w-full object-contain"
        />
        <p className="text-2xl font-semibold mt-8">Meaningful Insights and Implications:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Dominance of JFK and EWR:</strong> Both visualizations underscore the importance
            of JFK and EWR as major hubs for both passenger and freight traffic in the New York
            area.
          </li>
          <li>
            <strong>LGA&apos;s Focus:</strong> LGA primarily serves passenger traffic, with minimal
            freight activity.
          </li>
          <li>
            <strong>SWF&apos;s Niche:</strong> SWF operates at a much smaller scale for both
            passenger and freight, likely serving a different market or purpose than the larger
            airports.
          </li>
          <li>
            <strong>COVID-19 Impact:</strong> The pandemic had a profound and immediate negative
            impact on passenger travel, while the effect on freight volume was less severe and more
            varied. This suggests the resilience of air cargo compared to passenger travel during
            the pandemic.
          </li>
          <li>
            <strong>Seasonal Trends:</strong> The clear seasonality in passenger volume has
            implications for resource allocation, staffing, and pricing strategies for airlines and
            airport authorities.
          </li>
          <li>
            <strong>Economic Sensitivity of Freight:</strong> The potential link between the 2008
            economic crisis and the drop in freight volume suggests that air cargo can be sensitive
            to broader economic conditions.
          </li>
        </ul>
        <p className="text-2xl font-semibold mt-8">Ethical Considerations:</p>
        <p>
          Analyzing airport data can have ethical considerations related to data privacy, especially
          if more granular data on individual travel patterns were available. It&apos;s important to
          ensure that data is anonymized and aggregated to protect individual privacy. Additionally,
          insights gained from this data could inform decisions about airport expansion or resource
          allocation, which could have environmental and social impacts on surrounding communities.
          These potential implications should be considered in any decision-making process.
        </p>
        <p>
          This analysis provides a high-level overview of passenger and freight volume trends.
          Further analysis could delve into specific routes, airlines, or the impact of other
          external factors.
        </p>
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://colab.research.google.com/drive/132JJqRf24NYxq6V4Lhwiy3LPdsX6gm96?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="mr-2 h-4 w-4" />
              Google Colab Notebook
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NycAirport;
