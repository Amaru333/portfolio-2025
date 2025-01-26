import Pizza from "@/components/project-list/pizza";
import Head from "next/head";
import React from "react";

function PizzaPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | Pizza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Pizza />
    </>
  );
}

export default PizzaPage;
