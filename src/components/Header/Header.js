import { AppBar, Link, Paper, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";

const Code = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E3E6E8",
  borderRadius: 7,
  border: "2px solid rgb(104 102 102 / 87%)",
  fontSize: "13px",
  fontFamily: `"Azeret Mono", monospace`,
  color: "#232629",
  padding: "1px 5px",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
  // border: "1px solid gray",
}));

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#102187" }}
      elevation={0}
    >
      <Toolbar>
        <Stack direction={"row"} sx={{ m: "auto" }}>
          <Typography variant="h6" component="span" /* sx={{ flexGrow: 1 }} */>
            <Code sx={(theme) => ({ ...theme.typography.h5 })}>
              react-loading-indicators
            </Code>
          </Typography>
          <Typography
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
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
