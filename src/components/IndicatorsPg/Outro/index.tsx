import Typography from "@mui/material/Typography";

import GithubButton from "./GithubButton";

const Outro = () => {
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
        <GithubButton />
      </div>
    </>
  );
};

export default Outro;
