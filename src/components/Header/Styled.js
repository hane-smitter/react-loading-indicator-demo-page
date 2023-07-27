import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const WallPaper = styled(AppBar)({
  backgroundImage:
    "radial-gradient(circle at 100% 0%, #0b4cd708 0%, #324Ce4 15%, #1f33a5 50%)",
  minHeight: "80px",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    height: "60vh",
    zIndex: "-1",
    pointerEvents: "none",
    backgroundImage:
      "radial-gradient(circle at 100% 0%, rgba(50, 76, 228, 0.07) 15%, #f7f9fe08 40%)",
      // "linear-gradient(192deg, rgba(50, 76, 228, 0.2) 15%, #f7f9fe08 50%)",
  },
});

const Styled = { WallPaper };

export default Styled;
