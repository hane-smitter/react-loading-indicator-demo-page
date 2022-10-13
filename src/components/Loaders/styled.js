import { Paper, Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  minHeight: 100,
  marginInline: "auto",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  "@media (min-width: 800px)": {
    width: "80%",
  },
}));

const Code = styled(Typography)(({ theme }) => ({
  backgroundColor: "#E3E6E8",
  borderRadius: 3,
  fontSize: "13px",
  fontFamily: `"Azeret Mono", monospace`,
  color: "#232629",
  padding: "1px 5px",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
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
