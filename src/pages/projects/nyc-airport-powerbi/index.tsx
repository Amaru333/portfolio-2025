import NycAirportPowerBi from '@/components/project-list/nyc-airport-powerbi';
import Head from 'next/head';
import React from 'react';

function NewYorkCityAirportPowerBiPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | New York City Airport Traffic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NycAirportPowerBi />
    </>
  );
}

export default NewYorkCityAirportPowerBiPage;
