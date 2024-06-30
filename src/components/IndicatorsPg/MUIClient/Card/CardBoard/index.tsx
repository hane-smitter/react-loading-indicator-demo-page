import Card from "@mui/material/Card";

import styles from "../../../styles.module.scss";

function CardBoard({ children }) {
  return (
    <Card
      className={styles.card}
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
        "@media (min-width: 800px)": {
          width: "80%",
        },
      })}
    >
      {children}
    </Card>
  );
}

export default CardBoard;
