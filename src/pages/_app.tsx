import '@/styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import $ from 'jquery';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  /**
   * Import
   * Bootstrap JS
   */
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
    require('popper.js/dist/popper.min.js');
    (window as any).jQuery = $;
    (window as any).$ = $;
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-LR4EB63VR5`} />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LR4EB63VR5', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
