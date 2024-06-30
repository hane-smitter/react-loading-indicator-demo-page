import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SampleIndicator from "./SampleIndicator";

const Intro = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" component="p">
        If you cannot rid the loading time, then you should make the wait more
        pleasant to users. React Loading Indicators is here to ensure you excel
        at that.
        <br />
        With high customizability and elegance✨, your apps and splash screens
        should emit pleasantries and good vibes.
        <SampleIndicator />.
      </Typography>
      <br />
      <Typography variant="body1">To start using:</Typography>
      <div>
        <Typography
          variant="posterCode"
          sx={{ padding: "0.5em 1.1em" }}
          //   component="p"
        >
          npm install react-loading-indicators
        </Typography>
      </div>

      <div>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Features
        </Typography>
        <ul>
          <li>
            <span>🪶️ Light weight</span>
          </li>
          <li>
            <span>🥣️ Ready-made loading components with good defaults</span>
          </li>
          <li>
            <span>🔧️ Customizable to fit into your needs</span>
          </li>
          <li>
            <span>🥢 Same API for all components</span>
          </li>
          <li>
            <span>🍃️ Tree-shakeable</span>
          </li>
          <li>
            <span>🙅‍♀️️ No css import required</span>
          </li>
          <li>
            <span>✅️ Perfomant animations</span>
          </li>
          <li>
            <span>🚢️ Ships with Typescript declarations</span>
          </li>
          <li>
            <span>🏗️ Light build available</span>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Intro;
