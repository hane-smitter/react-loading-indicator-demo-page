"use client";

import { useState } from "react";
import Link from "@mui/material/Link";

// import Styled from "../../styled";
import styles from "../../styles.module.scss";

function GithubButton() {
  const [starEmoji, setStarEmoji] = useState(false);

  return (
    <Link
      href="https://github.com/hane-smitter/react-loading-indicator"
      sx={{ fontWeight: 900, fontSize: "1.16rem" }}
      className={styles.githubLnk}
    >
      {starEmoji ? (
        "⭐️"
      ) : (
        <img
          src="https://raw.githubusercontent.com/hane-smitter/react-loading-indicator-demo-page/assets/images/grinning-star.png"
          onError={() => setStarEmoji(true)}
          height={40}
          alt="Smiley Star"
        />
      )}
      &nbsp;&nbsp;
      <span>on Github</span>
    </Link>
  );
}

export default GithubButton;
