import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Amrutesh Arun- Full Stack Developer, Mobile App Developer, UI/UX Designer."
        />
        <meta
          name="keyword"
          content="amrutesh, projects, portfolio, javascript, developer, full stack, mobile app developer"
        ></meta>
        <meta name="author" content="Amrutesh Arun" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Amrutesh Arun | Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer, Mobile App Developer, UI/UX Designer."
        />
        {/* <meta
          property="og:image"
          content="https://www.yourdomain.com/images/amrutesh-arun-profile.jpg"
        /> */}
        <meta property="og:url" content="https://www.amrutesh.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amrutesh Arun | Portfolio" />
        <meta
          name="twitter:description"
          content="Get an inside look at the work and expertise of Amrutesh Arun in technology and innovation."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/images/amrutesh-arun-profile.jpg"
        /> */}

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amrutesh Arun",
              url: "https://www.amrutesh.me",
              // image: 'https://www.yourdomain.com/images/amrutesh-arun-profile.jpg',
              sameAs: ["https://github.com/amaru333", "https://www.linkedin.com/in/amrutesh-arun/"],
              jobTitle: "Software Developer",
              description:
                "Amrutesh Arun is a software developer specializing in building scalable web applications, mobile applications and UI Designs.",
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
