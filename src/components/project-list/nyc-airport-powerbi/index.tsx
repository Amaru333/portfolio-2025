import Badge from '@/common/Badge';
import { Code } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ProjectHeader from '@/common/ProjectHeader';
import Link from 'next/link';
import Image from 'next/image';

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
          href="https://app.powerbi.com/links/3-Mw-mh2qK?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare&bookmarkGuid=08a0b169-c2fb-487f-9884-6c472e879efc"
        >
          Link to PowerBi Report
        </Link>

        <p className="text-2xl font-semibold mt-8">Audience & Intent</p>
        <p className="mb-4">
          This PowerBI dashboard is designed for <strong>aviation industry stakeholders</strong>,
          including airport authorities, airline executives, urban planners, and policymakers in the
          New York metropolitan area. The primary intent is to enable{' '}
          <strong>data-driven decision-making</strong> by revealing long-term trends, seasonal
          patterns, and the impact of external shocks (particularly COVID-19 and the 2008 financial
          crisis) on NYC&apos;s airport ecosystem.
        </p>
        <p className="font-semibold mt-4">What I want them to learn:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            How different airports serve different roles (JFK as the primary international hub, EWR
            as a balanced passenger/freight airport, LGA for domestic traffic, and SWF as a smaller
            regional airport)
          </li>
          <li>The profound impact of COVID-19 on aviation and the ongoing recovery trajectory</li>
          <li>Seasonal patterns that can inform resource allocation and staffing decisions</li>
        </ul>
        <p className="font-semibold mt-4">What I want them to feel:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Confidence in making strategic decisions backed by historical data</li>
          <li>
            Awareness of the interconnectedness between passenger, freight, and air traffic metrics
          </li>
        </ul>
        <p className="font-semibold mt-4">What I want them to do:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Use these insights to optimize operations during peak seasons</li>
          <li>Plan for resilience against future disruptions</li>
          <li>Allocate resources more effectively across the four airports</li>
        </ul>

        <p className="text-2xl font-semibold mt-8">Story & Structure</p>
        <p className="font-semibold mt-4">The Narrative Arc:</p>
        <p className="mb-4">
          The dashboard tells a story of <strong>resilience, disruption, and recovery</strong> in
          NYC&apos;s aviation landscape over 24 years (2000-2024). The narrative unfolds in three
          interconnected chapters:
        </p>
        <ul className="list-decimal list-inside ml-4 mb-4">
          <li>
            <strong>Chapter 1 - Passenger Volume:</strong> Sets the stage by showing the dominance
            of JFK, clear seasonal rhythms, and the devastating impact of COVID-19 on human mobility
          </li>
          <li>
            <strong>Chapter 2 - Freight Volume:</strong> Reveals a different story—cargo proved more
            resilient to COVID-19 but was vulnerable to the 2008 economic crisis, highlighting how
            economic factors affect logistics differently than leisure travel
          </li>
          <li>
            <strong>Chapter 3 - Air Traffic Movements:</strong> Brings the story together by showing
            overall airport activity, confirming patterns seen in passenger data and reinforcing JFK
            and EWR&apos;s critical infrastructure roles
          </li>
        </ul>
        <p className="font-semibold mt-4">Visual Organization:</p>
        <p className="mb-4">
          Each visualization is placed sequentially with contextual narrative between them, guiding
          the viewer through the data story. The structure follows a{' '}
          <strong>comparative-temporal pattern</strong>:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>All three charts use the same time period (2000-2024) for consistency</li>
          <li>Color-coded by airport for easy cross-comparison</li>
          <li>Monthly granularity reveals both long-term trends and seasonal variations</li>
          <li>The placement creates a natural flow: people → goods → overall activity</li>
        </ul>
        <p className="mb-4">
          This organization supports the narrative by allowing readers to see how different metrics
          responded differently to the same external events, particularly highlighting the unique
          nature of each crisis.
        </p>

        <p className="text-2xl font-semibold mt-8">Design Choices</p>
        <p className="font-semibold mt-4">Color Strategy:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Airport-specific color coding</strong> ensures visual consistency across all
            three dashboards. Each airport maintains the same color throughout, enabling instant
            recognition and comparison
          </li>
          <li>
            Colors chosen for <strong>sufficient contrast</strong> to distinguish between airports
            while maintaining readability
          </li>
          <li>
            The palette is designed for <strong>accessibility</strong>, avoiding reliance solely on
            color to communicate information
          </li>
        </ul>
        <p className="font-semibold mt-4">Layout & Composition:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Consistent chart sizing</strong> creates visual harmony and makes
            cross-comparison intuitive
          </li>
          <li>
            <strong>Time-series line charts</strong> were the optimal choice for showing trends over
            24 years—they clearly reveal patterns, anomalies, and inflection points
          </li>
          <li>
            <strong>White space and margins</strong> prevent visual clutter, allowing each chart to
            breathe
          </li>
          <li>Strategic placement of legends ensures they don&apos;t obscure data</li>
        </ul>
        <p className="font-semibold mt-4">Typography & Hierarchy:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            Section headings in <strong>2xl font size</strong> create clear visual breaks between
            narrative sections
          </li>
          <li>
            Descriptive paragraph text provides context without overwhelming the visualizations
          </li>
          <li>The hierarchy guides the eye: Title → Context → Visualization → Interpretation</li>
        </ul>
        <p className="font-semibold mt-4">Clutter Reduction:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Minimal grid lines</strong> keep focus on the data trends rather than the
            scaffolding
          </li>
          <li>No unnecessary decorative elements—every visual component serves a purpose</li>
          <li>
            The dashboard avoids &quot;chart junk&quot; by eliminating 3D effects, excessive
            borders, or ornamental graphics
          </li>
        </ul>
        <p className="font-semibold mt-4">Perception & Design Principles Applied:</p>
        <ol className="list-decimal list-inside ml-4 mb-4">
          <li>
            <strong>Gestalt Principles:</strong>
            <ul className="list-disc list-inside ml-8 mt-2">
              <li>
                <strong>Similarity:</strong> Same-colored lines represent the same airport across
                all charts
              </li>
              <li>
                <strong>Continuity:</strong> Line charts naturally guide the eye through time
                progression
              </li>
              <li>
                <strong>Proximity:</strong> Grouping related text with corresponding visualizations
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>Pre-attentive Processing:</strong>
            <ul className="list-disc list-inside ml-8 mt-2">
              <li>
                Color differences allow viewers to instantly distinguish airports without conscious
                effort
              </li>
              <li>
                The dramatic COVID-19 drop is immediately visible due to the sharp slope change
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>Data-Ink Ratio (Tufte&apos;s Principle):</strong>
            <ul className="list-disc list-inside ml-8 mt-2">
              <li>
                Maximizing the proportion of ink dedicated to displaying data versus decoration
              </li>
              <li>Every line, label, and axis serves a functional purpose</li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>Progressive Disclosure:</strong>
            <ul className="list-disc list-inside ml-8 mt-2">
              <li>
                Overview metrics first (total volumes), then drill into patterns and insights
                through the narrative
              </li>
            </ul>
          </li>
        </ol>

        <p className="text-2xl font-semibold mt-8">Reflection</p>
        <p className="font-semibold mt-4">What Worked Well:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>The temporal comparison</strong> across 24 years effectively revealed both
            cyclical patterns and one-time shock events
          </li>
          <li>
            <strong>The three-metric approach</strong> (passenger, freight, air traffic) provided a
            holistic view of airport operations—showing that while passenger travel collapsed during
            COVID-19, freight remained more stable
          </li>
          <li>
            <strong>Color consistency</strong> across visualizations made it effortless to track
            individual airports through the story
          </li>
          <li>
            <strong>The narrative integration</strong> with visualizations created a compelling
            story rather than just presenting charts in isolation
          </li>
          <li>
            <strong>Seasonal patterns</strong> are immediately visible, which is valuable for
            operational planning
          </li>
        </ul>
        <p className="font-semibold mt-4">What Challenged Me:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Balancing detail with clarity:</strong> With 24 years of monthly data across 4
            airports, there was a risk of overwhelming viewers. Finding the right level of
            granularity without losing important patterns required careful consideration
          </li>
          <li>
            <strong>Distinguishing between correlation and causation:</strong> While the 2008
            freight dip and COVID-19 passenger drop are visible, communicating that these are
            correlations requiring further analysis (not definitive causal claims) was important
          </li>
          <li>
            <strong>Accessibility considerations:</strong> Ensuring color-blind users could still
            interpret the data may have required additional design iterations
          </li>
          <li>
            <strong>Data normalization:</strong> The vastly different scales between SWF and the
            major airports (JFK, EWR, LGA) could make SWF&apos;s trends less visible—deciding
            whether to use normalized or absolute values presented trade-offs
          </li>
        </ul>
        <p className="font-semibold mt-4">What I Would Refine Further:</p>
        <ol className="list-decimal list-inside ml-4 mb-4">
          <li>
            <strong>Interactive filters:</strong> Add the ability to toggle airports on/off, zoom
            into specific time periods, or highlight specific events (9/11, 2008 crisis, COVID-19)
            with annotations
          </li>
          <li>
            <strong>Year-over-year comparison views:</strong> Create small multiples showing each
            year as a separate line to make seasonal patterns even more apparent
          </li>
          <li>
            <strong>Recovery metrics:</strong> Add KPIs showing percentage recovery to pre-pandemic
            levels for each airport
          </li>
          <li>
            <strong>Economic indicators overlay:</strong> Include GDP, oil prices, or tourism data
            as background context to strengthen the causation narrative
          </li>
          <li>
            <strong>Predictive elements:</strong> Incorporate forecasting to project future trends
            based on historical patterns
          </li>
          <li>
            <strong>Mobile responsiveness:</strong> Optimize the dashboard layout for viewing on
            tablets and phones, as stakeholders may need access on-the-go
          </li>
          <li>
            <strong>Annotations for key events:</strong> Visual markers on the timeline highlighting
            major events (9/11, economic crisis, pandemic start, vaccine rollout) would strengthen
            the storytelling
          </li>
        </ol>

        <p className="text-2xl font-semibold mt-8">Visual Analysis</p>
        <p className="mb-4">
          This report analyzes the trends in monthly revenue passenger volume, monthly freight
          volume, and air traffic movements at New York&apos;s major airports (EWR, JFK, LGA, and
          SWF) from 2000 to 2024, based on the visualizations below.
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
        <Image
          src="/projects/nyc-airport-powerbi/passenger.png"
          alt="NYC Airport Passenger Traffic"
          className="my-4 w-full object-contain"
          width={1200}
          height={600}
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
        <Image
          src="/projects/nyc-airport-powerbi/freight.png"
          alt="NYC Airport Freight Traffic"
          className="my-4 w-full object-contain"
          width={1200}
          height={600}
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
        <Image
          src="/projects/nyc-airport-powerbi/air-traffic.png"
          alt="NYC Airport Air Traffic Movements"
          className="my-4 w-full object-contain"
          width={1200}
          height={600}
        />
        <div className="flex gap-x-2 my-6">
          <Button variant="outline" asChild>
            <a
              href="https://app.powerbi.com/links/3-Mw-mh2qK?ctid=88d59d7d-aecb-41b2-90c5-55595de02536&pbi_source=linkShare&bookmarkGuid=08a0b169-c2fb-487f-9884-6c472e879efc"
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
