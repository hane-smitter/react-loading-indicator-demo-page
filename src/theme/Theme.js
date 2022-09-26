import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            body {
                background-color: #0b4cd708;
            }
            .react-colorful {
                position: absolute !important;
                z-index: 15;
                bottom: 100%;
                left: 0;
            }
            .select-absolute {
                position: absolute !important;
                bottom: 100%;
                left: 0;
            }
        `,
    },
  },
  palette: { primary: { main: "#324CE4" }, common: { black: "#06021d" } },
  typography: {
    largeCode: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.3rem",
      },
    },
  },
});
theme = responsiveFontSizes(theme);
// theme.typography.subtitle2 = {
//     fontSize: '1.2rem',
//     '@media (min-width:600px)': {
//       fontSize: '1.5rem',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '2.4rem',
//     },
//   };

// Primary color - #324CE4
// black-ish - #3542E3

export default theme;
