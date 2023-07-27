import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import Styled from "../styled";

const Outro = () => {
  const [starEmoji, setStarEmoji] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        component="p"
        sx={{ mt: 5, textAlign: "center" }}
      >
        Before you go 💙️
      </Typography>

      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Styled.GithubBtn
          href="https://github.com/hane-smitter/react-loading-indicator"
          sx={{ fontWeight: 900, fontSize: "1.16rem" }}
        >
          {starEmoji ? (
            "⭐️"
          ) : (
            <img
              src="https://raw.githubusercontent.com/hane-smitter/react-loading-indicator-demo-page/assets/images/grinning-star.png"
              onError={() => setStarEmoji(true)}
              alt="Smiley Star"
            />
          )}
          &nbsp;&nbsp;
          <span>on Github</span>
        </Styled.GithubBtn>
      </div>
    </>
  );
};

export default Outro;
