"use client";

import { type ReactNode } from "react";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

export { default as ScrollHeading } from "./ScrollHeading";

export const BodyText = styled<(props: { children: ReactNode }) => JSX.Element>(
  (props) => <Typography variant="subtitle1" component="p" {...props} />
)({
  fontSize: "1rem",
});

export const BodyCode = styled<(props: { children: ReactNode }) => JSX.Element>(
  (props) => <Typography variant="posterCode" {...props} />
)({
  fontSize: "1rem !important",
});
