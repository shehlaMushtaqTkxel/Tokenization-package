// radius.tsx

// import { Radius } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface Radius {
    none?: string;
    xxs?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    "4xl"?: string;
    "5xl"?: string;
    "6xl"?: string;
    "7xl"?: string;
    "8xl"?: string;
    "9xl"?: string;
    "10xl"?: string;
    "11xl"?: string;
    "12xl"?: string;
  }
}

const primitiveRadius = {
  none: "0rem",
  xxs: "0.125rem",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.625rem",
  xl: "0.75rem",
  "2xl": "0.875rem",
  "3xl": "1rem",
  "4xl": "1.125rem",
  "5xl": "1.25rem",
  "6xl": "1.375rem",
  "7xl": "1.5rem",
  "8xl": "1.625rem",
  "9xl": "1.75rem",
  "10xl": "1.875rem",
  "11xl": "2rem",
  "12xl": "6249.9375rem",
};

const componentRadius = {
  // Add component-specific radius values here if any
};

export const radius = {
  ...primitiveRadius,
  ...componentRadius,
};
