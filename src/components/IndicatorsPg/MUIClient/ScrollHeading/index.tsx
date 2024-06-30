import React from "react";
import Typography, { TypographyOwnProps } from "@mui/material/Typography";

import styles from "../../styles.module.scss";

interface ScrollHeadingProps extends TypographyOwnProps {
  /** The id of the element. */
  id?: string;
  /** Text to show as the heading */
  text?: string;
  children: React.ReactNode;
}

declare module "@mui/material/Typography" {
  interface TypographyOwnProps {}
}

function ScrollHeading({
  id,
  text,
  children,
  sx,
  ...rest
}: ScrollHeadingProps): React.JSX.Element {
  const ID: { id?: string } = id
    ? { id: id.replace(/[^\w]/gi, "-").toLowerCase() }
    : {};

  if (!ID.id) {
    const headingNode = text || children;

    if (typeof headingNode === "string") {
      ID.id = headingNode.replace(/[^\w]/gi, "-").toLowerCase();
    }
  }

  return (
    <Typography
      {...ID}
      variant="h4"
      component="h1"
      sx={{ textTransform: "capitalize", ...sx }}
      {...rest}
    >
      <span
        className={styles.heading}
        {...(ID?.id && {
          onClick: (event: React.SyntheticEvent<HTMLSpanElement>) => {
            const scrollTarget: HTMLElement =
              event.currentTarget.parentElement || event.currentTarget;

            scrollTarget.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });

            if (ID?.id) window.location.hash = `#${ID.id}`;
          },
        })}
      >
        {text || children}
      </span>
    </Typography>
  );
}

export default ScrollHeading;
