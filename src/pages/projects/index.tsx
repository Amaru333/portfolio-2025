import Projects from "@/components/projects";
import Head from "next/head";
import React from "react";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Projects />;
    </>
  );
}

export default ProjectsPage;
