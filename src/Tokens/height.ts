
declare module "@mui/joy/styles" {
  interface LayoutHeight {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
}
const primitiveHeight = {
  xs: "2.25rem",
  sm: "2.5rem",
  md: "2.75rem",
  lg: "3rem",
  xl: "3.75rem",
};

export const height = {
  ...primitiveHeight,
};
