import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import theme from "src/theme";
import "./global.scss";

export const FontInconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "React Loading Indicators",
  description:
    "A demo site of wonderful loading indicators by react-loading-indicators library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-inconsolata": FontInconsolata.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        <meta charSet="utf-8" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#000000" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          type="image/png"
          href="/icons/apple-icon-57x57.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          type="image/png"
          href="/icons/apple-icon-60x60.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          type="image/png"
          href="/icons/apple-icon-72x72.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          type="image/png"
          href="/icons/apple-icon-76x76.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="114x114"
          type="image/png"
          href="/icons/apple-icon-114x114.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          type="image/png"
          href="/icons/apple-icon-120x120.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="144x144"
          type="image/png"
          href="/icons/apple-icon-144x144.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          type="image/png"
          href="/icons/apple-icon-152x152.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/png"
          href="/icons/apple-icon-180x180.png"
        />
      </head>

      <body>
        <noscript>This app runs better with Javascript enabled.</noscript>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
