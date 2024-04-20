import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

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
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
