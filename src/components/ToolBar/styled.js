import { styled } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";

const Wrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  // zIndex: 10, // Avoiding to create stacking context; it conflicts with react-select dropdown
  fontSize: "13px",
  position: "relative",
  gap: "10px",
  width: "100%",
  marginInline: "auto",
  flexWrap: "nowrap",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const Item = styled((props) => <Button variant="contained" {...props} />, {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ theme, isActive }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  position: "relative",
  color: theme.palette.common.white,
  cursor: "pointer",
  // zIndex: -1,
  fontWeight: 700,
  fontSize: "0.9em",
  margin: "0!important",
  flexBasis: "auto",
  minWidth: "50px",
  ...(isActive && {
    backgroundColor: "#07084099",
    "&:hover": { backgroundColor: "#070840" }, // #07084005
  }),
}));

// const ActionWidgetBox = styled("div")(({ theme }) => ({
//   width: "100%",
//   position: "absolute",
//   bottom: "100%",
//   left: "0",
//   // display: "flex",
//   // justifyContent: "center",
//   // alignItems: "center",
// }));

const PoppingWidget = styled("div")({
  position: "absolute",
  zIndex: 3,
  minWidth: 200,
  // pointerEvents: "all",
  // bottom: "100%",
  // left: 0,
});

const TextInput = styled((props) => {
  const { inputRef: ref, ...rem } = props;

  const inputRef = ref ? { ref } : null;

  return (
    <div>
      <input {...inputRef} type="text" {...rem} />
      <span className="focus-border">
        <i></i>
      </span>
    </div>
  );
})(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "1px solid #ccc",
  padding: "10px 8px",
  transition: "backgroundColor 0.5s linear",
  outline: "none",
  backgroundColor: "#f0f1f1",
  borderRadius: "3px",
  fontSize: "0.95rem",

  "& ~ span.focus-border::before, & ~ span.focus-border:after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: "2px",
    backgroundColor: theme.palette.primary.light,
    transition: "0.3s",
  },

  "& ~ span.focus-border:after": {
    top: "auto",
    bottom: 0,
    left: "auto",
    right: 0,
  },

  "& ~ span.focus-border i:before,& ~ span.focus-border i:after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "2px",
    height: 0,
    backgroundColor: theme.palette.primary.main,
    transition: "0.4s",
  },

  "& ~ span.focus-border i:after": {
    left: "auto",
    right: 0,
    top: "auto",
    bottom: 0,
  },

  "&:focus ~ span.focus-border:before, &:focus ~ span.focus-border:after": {
    width: "100%",
    transition: "0.3s",
  },

  "&:focus ~ span.focus-border i:before, &:focus ~ span.focus-border i:after": {
    height: "100%",
    transition: "0.4s",
  },
}));

const Styled = { Wrapper, Item, PoppingWidget, TextInput };

export default Styled;
