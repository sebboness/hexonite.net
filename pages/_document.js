import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital@0;1&display=swap" rel="stylesheet" />

        
        <link rel="apple-touch-icon" sizes="180x180" href="/img/logo/favicon-180.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/logo/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/logo/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/logo/favicon-192.png" />
        <meta name="msapplication-TileColor" content="#00a7ff" /> 
        <meta name="msapplication-TileImage" content="" />
        <meta name="theme-color" content="#00a7ff" />

        <meta name="description" content="By Sebastian Stefaniuk - Software engineer with a good eye for design, attention to detail, and a SOLID understanding of how good code runs your business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
        <script src="https://kit.fontawesome.com/67e614e582.js" crossOrigin="anonymous" async defer></script>
      </body>
    </Html>
  );
}
