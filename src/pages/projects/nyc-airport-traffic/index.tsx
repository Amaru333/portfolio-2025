import NycAirport from '@/components/project-list/nyc-airport';
import Head from 'next/head';
import React from 'react';

function NewYorkCityAirportTrafficPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | New York City Airport Traffic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NycAirport />
    </>
  );
}

export default NewYorkCityAirportTrafficPage;
