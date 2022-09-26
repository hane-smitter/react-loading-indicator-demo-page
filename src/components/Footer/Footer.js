import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Twitter, GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <Stack
      sx={{ bgcolor: "common.black", flexWrap: "wrap", padding: "10px 5px" }}
      direction="row"
    >
      <Stack sx={{ m: "auto" }} direction="row" spacing={3}>
        <Link href="https://twitter.com/smitterhane">
          <Twitter />
        </Link>
        <Link href="https://github.com/hane-smitter">
          <GitHub />
        </Link>
        <Link href="https://www.linkedin.com/in/zacky-aduoli">
          <Linkedin />
        </Link>
      </Stack>
      <Typography
        variant="body2"
        sx={{ width: "100%", color: "#fff000" }}
        align="center"
      >
        Copyright &copy;{" "}
        <Link href="https://lookupzach.netlify.app" underline="hover">
          Zacky
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Stack>
  );
};

export default Footer;
