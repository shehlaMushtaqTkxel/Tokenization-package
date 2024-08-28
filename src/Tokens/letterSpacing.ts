// Define the type for the letter spacing
declare module "@mui/joy/styles" {
  interface LetterSpacing {
    none: string;
    xs: string;
    sm: string;
    negative: string;
  }
}

export const letterSpacing = {
  none: "0rem",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "2rem",
  negative: "-0.125rem",
};
