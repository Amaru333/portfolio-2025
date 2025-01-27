import RecipeApp from "@/components/project-list/recipe-app";
import Head from "next/head";
import React from "react";

function RecipeAppPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | Recipe App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RecipeApp />
    </>
  );
}

export default RecipeAppPage;
