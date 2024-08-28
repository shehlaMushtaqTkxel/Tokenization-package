
declare module "@mui/joy/styles" {
  interface Width {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  }
}

const primitiveWidth = {
  xs: "36rem",
  sm: "49.125rem",
  md: "62rem",
  lg: "75rem",
  xl: "87.5rem",
};

const componentWidth = {
  "width-xs": "var(--joy-width-xs)",
  "width-sm": "var(--joy-width-sm)",
  "width-md": "var(--joy-width-md)",
  "width-lg": "var(--joy-width-lg)",
  "width-xl": "var(--joy-width-xl)",
};

export const width = {
  ...primitiveWidth,
  ...componentWidth,
};
