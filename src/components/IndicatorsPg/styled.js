import { Paper, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  minHeight: 100,
  marginInline: "auto",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  "@media (min-width: 800px)": {
    width: "80%",
  },
}));

const Code = styled(Typography)(({ theme }) => ({
  // backgroundColor: "#E3E6E8",
  borderRadius: 5,
  fontSize: "13px",
  fontFamily: `"Azeret Mono", monospace`,
  color: "#232629",
  padding: "1px 5px",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",

  "& code": {
    whiteSpace: "pre-wrap !important",
    fontFamily: `"Azeret Mono", monospace`,
    letterSpacing: "0.4px",
  },
}));

const ContentSection = styled(Stack)(({ theme }) => ({
  minHeight: 200,
  position: "relative",
}));
const ComponentContainer = styled(Box)(({ theme }) => ({
  margin: "auto",
}));

const Styled = { Card, Code, ContentSection, ComponentContainer };

export default Styled;
