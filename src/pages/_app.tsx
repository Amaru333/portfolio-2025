import Navbar from "@/common/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
          <Component {...pageProps} />
          <Navbar />
        </div>
      </ThemeProvider>
    </>
  );
}
