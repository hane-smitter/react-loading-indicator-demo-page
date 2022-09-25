import { styled } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";

const Wrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  zIndex: 10,
  fontSize: "13px",
  position: "relative",
  gap: "10px",
  width: "100%",
  marginInline: "auto",
  flexWrap: "nowrap",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  position: "relative",
  color: theme.palette.common.white,
  cursor: "pointer",
  zIndex: 5,
  fontWeight: 700,
  fontSize: "0.9em",
  margin: "0!important",
  flexBasis: "auto",
  minWidth: "50px",
}));

const RenderActionBox = styled("div")(({ theme }) => ({
  width: "100%",
  position: "absolute",
  bottom: "100%",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Styled = { Wrapper, Item, RenderActionBox };

export default Styled;
