"use client";

import React from "react";
import {
  createTheme,
  extendTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Nunito } from "next/font/google";
import { deepmerge } from "@mui/utils";

// import { TypographyOptions } from "@mui/material/styles/createTypography";

// type MyTypographyOptions = {
//   largeCode?: {
//     [key: string]: string | React.CSSProperties;
//   };
// };

declare module "@mui/material/styles" {
  interface TypographyVariants {
    code: React.CSSProperties;
    posterCode?: React.CSSProperties | { [key: string]: React.CSSProperties };
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
    posterCode?: React.CSSProperties | { [key: string]: React.CSSProperties };
  }

  interface Theme {
    typography: {
      code: React.CSSProperties;
      posterCode: React.CSSProperties | { [key: string]: React.CSSProperties };
    };
  }

  // Below type causes bugs
  // interface ThemeOptions {
  //   typography: {
  //     posterCode?: React.CSSProperties | { [key: string]: React.CSSProperties };
  //   };
  // }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    code: true;
    posterCode: true;
  }
}

export const FontNunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

let theme = createTheme({
  cssVariables: { cssVarPrefix: "rli" },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            :root {
              --text-muted: #858585;
              --text-link: #8cb4ff;
              --text-inactive: #cdcdcda6;
              --font-nunito: ${FontNunito.style.fontFamily};
              --white-soft: #f8fafc;
              --white-bg: #f9fbfd;
              --white-pure: #ffffff;
            }
            body {
              background-color: var(--white-bg);
              scroll-behavior: smooth;
              min-height: 100vh;
              display: grid;
              grid-template-rows: auto 1fr auto;
            }

            * {
                scroll-behavior: smooth;
            }
        `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          code: "span",
          posterCode: "span",
        },
      },
    },
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: { main: "#009da5" }, // #026CC4
  //       common: { black: "#06021d" }, // #009da5
  //       text: { primary: "rgb(76 67 67 / 90%)" },
  //     },
  //   },
  // },
  palette: {
    mode: "light",
    primary: { main: "#009da5" }, // #026CC4, #
    secondary: { main: "#5a00a5" },
    common: { black: "#2d3748", white: "#f8fafc" }, // #009da5
    text: { primary: "rgb(76 67 67 / 90%)" },
  },
  typography: {
    fontFamily: "var(--font-nunito)",
    code: {
      fontFamily: "var(--font-inconsolata)",
      fontWeight: 500,
      color: "#232629",
      fontSize: "0.75rem",
      userSelect: "all",
    },
    posterCode: {
      // color: "#232629",
      color: "var(--rli-palette-common-black)", // #373D3F
      fontFamily: "var(--font-inconsolata)",
      fontSize: "0.9rem",
      fontWeight: 500,
      userSelect: "all",
      backgroundColor: "#e3e6e8",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      display: "inline-block",
      padding: "1px 5px",
      borderRadius: 5,
      "@media (min-width:600px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

export default theme;
