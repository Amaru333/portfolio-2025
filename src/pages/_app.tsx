import Navbar from "@/common/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <ThemeProvider>
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
          <Component {...pageProps} />
          <Navbar />
        </div>
      </ThemeProvider>
    </>
  );
}
