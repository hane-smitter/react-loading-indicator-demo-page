import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  minHeight: 100,
  marginInline: "auto",
  // isolation: "isolate",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  "@media (min-width: 800px)": {
    width: "80%",
  },
}));

const Code = styled((props) => <Typography component="span" {...props} />)(
  ({ theme }) => ({
    // backgroundColor: "#E3E6E8",
    borderRadius: 5,
    fontSize: "13px",
    fontFamily: `"Azeret Mono", monospace`,
    color: "#232629",
    padding: "1px 5px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    userSelect: "all",

    backgroundColor: "#e3e6e8",
    display: "inline-block",

    "& code": {
      whiteSpace: "pre-wrap !important",
      fontFamily: `"Azeret Mono", monospace`,
      letterSpacing: "0.4px",
    },
  })
);

const ContentSection = styled(Stack)(() => ({
  minHeight: 200,
  position: "relative",
}));

const ComponentContainer = styled(Box)(() => ({
  margin: "auto",
}));

const GithubBtn = styled(Link)(() => ({
  textDecoration: "none",
  color: "#ffffff",
  backgroundColor: "#1a212e",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  padding: "10px 15px",
  transition: "transform 500ms ease-out, background-color 150ms ease-out",
  "&:hover": {
    backgroundColor: "#0e121a",
    transform: "scale(1.03)",
  },
}));

const VariantsBox = styled("span")`
  width: 100px;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;

  @media (max-width: 400px) {
    display: none;
  }
`;

const Heading = styled((props) => {
  const { id, ...rem } = props;

  const ID = id
    ? { id: String(id).replace(/[^\w]/gi, "-").toLowerCase() }
    : null;

  return (
    <Typography
      onClick={(event) => {
        event.currentTarget.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        ID && (window.location.hash = `#${ID.id}`);
      }}
      {...ID}
      {...rem}
    />
  );
})`
  position: relative;
  font-weight: 600;
  text-transform: capitalize;

  &::before {
    content: "#";
    position: absolute;
    bottom: 50%;
    transform: translate(-120%, 50%);
    cursor: pointer;
    opacity: 0;
    transition: opacity 100ms linear;
    font-size: 0.7em;
    font-weight: 200;
  }
  &:hover::before {
    color: #23359f;
    text-decoration: underline;
    opacity: 1;
  }
`;
const Tip = styled((props) => <Typography variant="body1" {...props} />)({
  border: "2px solid #0cab0c",
  borderRadius: "5px",
  backgroundColor: "#f1fff1",
  padding: "8px 15px",
});

const BodyText = styled((props) => (
  <Typography variant="subtitle1" component="p" {...props} />
))({});

const Styled = {
  Card,
  Code,
  ContentSection,
  ComponentContainer,
  GithubBtn,
  VariantsBox,
  Heading,
  Tip,
  BodyText,
};

export default Styled;
