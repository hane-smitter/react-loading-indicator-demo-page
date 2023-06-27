import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const Wrapper = styled("div")({
  display: "block",
  width: "35em",
  margin: "auto",

  "@media (max-width: 650px)": {
    fontSize: "13px",
  },
  "@media (max-width: 500px)": {
    fontSize: "10px",
  },
  "@media (max-width: 400px)": {
    fontSize: "8px",
  },
});

const SpeedAdjustBox = styled(Box)({
  display: "grid",
  justifyItems: "stretch",
  position: "relative",
});

const DataList = styled("datalist")({
  display: "flex",
  width: "100%",
  position: "absolute",
  justifyContent: "space-between",
});

const Option = styled("option")`
  padding: 0;
  width: 2ch;
`;
const EasingBox = styled("div")({
  position: "absolute",
  bottom: "10%",
  right: "0",

  "@media (max-width: 400px)": {
    display: "none",
  },
});

const Styled = { SpeedAdjustBox, Option, DataList, EasingBox, Wrapper };

export default Styled;
