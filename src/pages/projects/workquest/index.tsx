import WorkQuest from "@/components/project-list/workquest";
import Head from "next/head";
import React from "react";

function WorkQuestPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | WorkQuest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <WorkQuest />
    </>
  );
}

export default WorkQuestPage;
