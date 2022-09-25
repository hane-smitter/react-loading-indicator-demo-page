import { Paper, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  width: "80%",
  minHeight: 100,
  marginInline: "auto",
}));

const Code = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E3E6E8",
  borderRadius: 3,
  fontSize: "13px",
  fontFamily: `"Azeret Mono", monospace`,
  color: "#232629",
  padding: "1px 5px",
  whiteSpace: "pre-wrap",
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
