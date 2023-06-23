import React from "react";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Styled from "./Styled";

// const Code = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#E3E6E8",
//   borderRadius: 7,
//   border: "2px solid rgb(104 102 102 / 87%)",
//   fontSize: "13px",
//   fontFamily: `"Azeret Mono", monospace`,
//   color: "#232629",
//   padding: "1px 5px",
// }));

const Header = () => {
  return (
    <Styled.WallPaper
      position="static"
      // color="transparent"
      // style={{ backgroundColor: "#102187" }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "stretch", alignItems: "center" }}>
        {/* <Stack direction={"row"} sx={{ m: "auto" }}> */}
        {/*<Typography variant="h6" component="span">
            <Code sx={(theme) => ({ ...theme.typography.h5 })}>
              react-loading-indicators
            </Code>
          </Typography> */}
        <Typography
          variant="h3"
          component="h1"
          sx={{ margin: "auto", fontWeight: 900 }}
        >
          React Loading Indicators
        </Typography>
        {/* <Typography
            variant="caption"
            component="span"
            sx={{ m: "auto 0 0 5px" }}
          >
            by{" "}
            <Link
              href="https://github.com/hane-smitter"
              sx={{ color: "#fff000" }}
            >
              Smitter
            </Link> 
          </Typography>*/}
        {/* </Stack> */}
      </Toolbar>
    </Styled.WallPaper>
  );
};

export default Header;
