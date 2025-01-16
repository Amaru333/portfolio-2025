import Medverse from "@/components/project-list/medverse";
import Head from "next/head";
import React from "react";

function MedversePage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | Medverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Medverse />;
    </>
  );
}

export default MedversePage;
