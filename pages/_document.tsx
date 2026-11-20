import { Head, Html, Main, NextScript } from "next/document";

// Turns on the scroll-reveal hidden state before first paint (see lib/reveal.ts).
// If the app hasn't started within 3 s (slow or failed script), show everything.
const revealBoot = `(function(){var r=document.documentElement;r.classList.add('reveal-on');setTimeout(function(){if(!('revealReady' in r.dataset))r.classList.remove('reveal-on')},3000)})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#011457" />
        <script dangerouslySetInnerHTML={{ __html: revealBoot }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
