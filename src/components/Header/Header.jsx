import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("react-loading-indicators/package.json");

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <AppBar position="static" elevation={0} className={styles.homeTopBar}>
      <Toolbar sx={{ justifyContent: "stretch", alignItems: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ margin: "auto", fontWeight: 900 }}
        >
          React Loading Indicators
          <Typography
            variant="overline"
            component="span"
            sx={{ fontWeight: 700, ml: 1 }}
          >
            V<span style={{ fontSize: "0.9rem" }}>{packageJson.version}</span>
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
