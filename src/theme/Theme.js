import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            body {
                background-color: #fafbfd4d;
                color: rgb(76 67 67 / 90%);
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
    fontFamily: "Nunito",
  },
});
theme = responsiveFontSizes(theme);

export default theme;
