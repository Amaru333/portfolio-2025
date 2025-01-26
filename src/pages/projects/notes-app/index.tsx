import NotesApp from "@/components/project-list/notes-app";
import Head from "next/head";
import React from "react";

function NotesAppPage() {
  return (
    <>
      <Head>
        <title>Amrutesh Arun | Notes App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NotesApp />
    </>
  );
}

export default NotesAppPage;
