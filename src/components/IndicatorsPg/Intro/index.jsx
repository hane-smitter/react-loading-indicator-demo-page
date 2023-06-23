import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";

import Styled from "../styled";

const Intro = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" component="p">
        A collection of <em>simplistic</em>, <em>customizable</em> and{" "}
        <em>elegant</em> loading indicators to fancy users as they wait for a
        response
        <OrbitProgress
          variant="dotted"
          speedPlus={2}
          style={{ fontSize: "4px", marginLeft: "6px" }}
        />
        .
      </Typography>
      <br />
      <Typography variant="body1">To start using:</Typography>
      <div>
        <Styled.Code
          variant="subtitle2"
          sx={(theme) => ({
            ...theme.typography.largeCode,
            padding: "0.5em 1.1em",
          })}
          component="p"
        >
          npm install react-loading-indicators
        </Styled.Code>
      </div>

      <div>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Features
        </Typography>
        <ul>
          <li>
            <span>🥣️ Ready-made loading indicators with good defaults</span>
          </li>
          <li>
            <span>🔧️ Customizable to fit into your needs</span>
          </li>
          <li>
            <span>🙅‍♀️️ No css import required</span>
          </li>
          <li>
            <span>
              ✅️ Animating layout changes is expensive. This is well handled
            </span>
          </li>
          <li>
            <span>🚢️ Shipped with Typescript declarations</span>
          </li>
          <li>
            <span>🪶️ Light build</span>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Intro;