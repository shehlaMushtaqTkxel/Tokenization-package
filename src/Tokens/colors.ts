import { ColorSystemOptions } from "@mui/joy/styles/extendTheme";
import { DefaultColorScheme } from "@mui/joy/styles/types";

declare module "@mui/joy/styles" {
  interface Palette {
    base: {
      white?: string;
      black?: string;
    };

    "Secondary-Brand": {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
      1200?: string;
    };

    "Primary-Brand": {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    black: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    sage: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    palm: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    red: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    yellow: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    green: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };

    blue: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      1000?: string;
    };
    text: {
      "primary-text": string;
      "text-error-primary": string;
      "text-warning-primary": string;
      "text-success-primary": string;
      "text-brand-primary": string;
      "text-brand-secondary": string;
      "text-brand-tertiary": string;
      "text-secondary": string;
      "text-secondary_hover": string;
      "text-tertiary": string;
      "text-tertiary_hover": string;
      "text-white": string;
      "text-disabled": string;
      "text-info-primary": string;
      "text-white-2": string;
      "text-brand-secondary-2": string;
      "text-info-primary-2": string;
    };
    border: {
      "border-primary-300": string;
      "border-secondary-200": string;
      "border-tertiary": string;
      "border-disabled": string;
      "border-brand": string;
      "border-brand-solid": string;
      "border-error": string;
      "border-error-solid": string;
      "border-success": string;
      "border-success-solid": string;
      "border-warning": string;
      "border-warning-solid": string;
      "border-info": string;
      "border-info-solid": string;
      "border-brand-secondary": string;
      "border-brand-secondary-solid": string;
      "border-primary-2-100": string;
      "border-primary-100": string;
    };
    foreground: {
      "fg-white": string;
      "fg-disabled": string;
      "fg-brand-primary": string;
      "fg-brand-secondary": string;
      "fg-error-primary": string;
      "fg-error-secondary": string;
      "fg-warning-primary": string;
      "fg-warning-secondary": string;
      "fg-success-primary": string;
      "fg-success-secondary": string;
      "fg-black": string;
      "fg-info-primary": string;
      "fg-info-secondary": string;
      "fg-primary": string;
      "fg-secondary": string;
      "fg-tertiary": string;
      "fg-brand-tertiary": string;
    };
    background: {
      "bg-white": string;
      "bg-black": string;
      "bg-success-secondary": string;
      "bg-success-solid": string;
      "bg-success-primary": string;
      "bg-warning-primary": string;
      "bg-warning-secondary": string;
      "bg-warning-solid": string;
      "bg-error-primary": string;
      "bg-error-secondary": string;
      "bg-error-solid": string;
      "bg-info-primary": string;
      "bg-info-secondary": string;
      "bg-info-solid": string;
      "bg-brand-solid": string;
      "bg-brand-solid-hover": string;
      "bg-brand-solid-secondary": string;
      "bg-shadow-200": string;
      "bg-gray": string;
      "bg-gray-300": string;
      "bg-black-sec": string;
      "bg-brand-solid-hover-2": string;
      "bg-brand-secondary": string;
      "bg-brand-solid-secondary-light": string;
      "bg-brand-solid-secondary-2": string;
      "bg-shadow-600": string;
    };
    button: {
      "button-primary-bg"?: string;
      "button-primary-hover"?: string;
      "button-primary-border"?: string;
      "button-primary-disabled"?: string;
      "button-primary-text"?: string;
      "button-primary-text-2"?: string;
      "button-primary-disabled-text"?: string;

      "button-secondary-bg"?: string;
      "button-secondary-hover"?: string;
      "button-secondary-border"?: string;
      "button-secondary-disabled"?: string;
      "button-secondary-text"?: string;
      "button-secondary-text-2"?: string;
      "button-secondary-disabled-text"?: string;

      "button-outlined-hover"?: string;
      "button-outlined-border"?: string;
      "button-outlined-text"?: string;
      "button-outlined-disabled-text"?: string;
      "button-outlined-disabled"?: string;

      "button-text-hover"?: string;
      "button-text-border"?: string;
      "button-text-text"?: string;
      "button-text-text-2"?: string;
      "button-text-disabled"?: string;
      "button-text-disabled-text": string;
    };
  }
}
type ColorScheme =
  | Partial<Record<DefaultColorScheme, ColorSystemOptions>>
  | undefined;
const primitiveColorsLight = {
  "Secondary-Brand": {
    100: "#f8fbf1",
    200: "#f1f7e3",
    300: "#eaf4d4",
    400: "#e3f0c6",
    500: "#dcecb7",
    600: "#d5e8a9",
    700: "#cee499",
    800: "#c7df8a",
    900: "#c1db79",
    1000: "#bbd768",
    1200: "#99b449",
  },
  "Primary-Brand": {
    100: "#ecf1f1",
    200: "#ccd6d5",
    300: "#b3c2c0",
    400: "#9aaeac",
    500: "#829a99",
    600: "#6a8886",
    700: "#537573",
    800: "#3c6361",
    900: "#24514f",
    1000: "#05403e",
  },
  black: {
    100: "#e6e6e6",
    200: "#cecece",
    300: "#b6b6b6",
    400: "#9f9f9f",
    500: "#888888",
    600: "#727272",
    700: "#5d5d5d",
    800: "#494949",
    900: "#353535",
    1000: "#232323",
  },
  sage: {
    100: "#f6faf8",
    200: "#eef4f2",
    300: "#e6efeb",
    400: "#dde9e5",
    500: "#d5e4df",
    600: "#ccded8",
    700: "#c4d9d2",
    800: "#bcd4cc",
    900: "#b3cec5",
    1000: "#abc9bf",
  },
  palm: {
    100: "#e8efee",
    200: "#d1dfde",
    300: "#bacfce",
    400: "#a3c0be",
    500: "#8db0ae",
    600: "#76a19e",
    700: "#60928f",
    800: "#488380",
    900: "#2f7471",
    1000: "#086663",
  },
  red: {
    100: "#fceae7",
    200: "#f7d5d0",
    300: "#f2c0b9",
    400: "#ecaba2",
    500: "#e6968b",
    600: "#df8175",
    700: "#d66b5f",
    800: "#ce5448",
    900: "#c43a31",
    1000: "#ba1414",
  },
  yellow: {
    100: "#fff8ed",
    200: "#fff0db",
    300: "#ffe8c9",
    400: "#ffe1b6",
    500: "#ffd9a3",
    600: "#ffd18f",
    700: "#ffc97a",
    800: "#ffc164",
    900: "#feb849",
    1000: "#fdb022",
  },
  green: {
    100: "#e8f1eb",
    200: "#d2e3d8",
    300: "#bcd5c5",
    400: "#a6c7b2",
    500: "#90b99f",
    600: "#7aac8d",
    700: "#639e7b",
    800: "#4b9169",
    900: "#318358",
    1000: "#067647",
  },
  blue: {
    100: "#e6efff",
    200: "#cddfff",
    300: "#b5cfff",
    400: "#9cbefd",
    500: "#84adfc",
    600: "#6b9afc",
    700: "#558bf6",
    800: "#3d78f3",
    900: "#2364ef",
    1000: "#004eeb",
  },
  base: {
    white: "#ffffff",
    black: "#000000",
  },
};
export const semanticColorsLight = {
  text: {
    "text-primary": "var(--joy-palette-black-1000)",
    "text-error-primary": "var(--joy-palette-red-1000)",
    "text-warning-primary": "var(--joy-palette-yellow-1000)",
    "text-success-primary": "var(--joy-palette-green-1000)",
    "text-brand-primary": "var(--joy-palette-Primary-Brand-1000)",
    "text-brand-secondary": "var(--joy-palette-Secondary-Brand-1000)",
    "text-brand-tertiary": "var(--joy-palette-Sage-1000)",
    "text-secondary": "var(--joy-palette-black-800)",
    "text-secondary_hover": "var(--joy-palette-black-900)",
    "text-tertiary": "var(--joy-palette-black-700)",
    "text-tertiary_hover": "var(--joy-palette-black-800)",
    "text-white": "var(--joy-palette-base-white)",
    "text-disabled": "var(--joy-palette-black-500)",
    "text-info-primary": "var(--joy-palette-blue-1000)",
    "text-white-2": "var(--joy-palette-black-100)",
    "text-brand-secondary-2": "var(--joy-palette-Secondary-Brand-1200)",
    "text-info-primary-2": "var(--joy-palette-blue-800)",
  },
  border: {
    "border-primary-300": "var(--joy-palette-black-300)",
    "border-secondary-200": "var(--joy-palette-black-200)",
    "border-tertiary": "var(--joy-palette-black-100)",
    "border-disabled": "var(--joy-palette-black-500)",
    "border-brand": "var(--joy-palette-Primary-Brand-600)",
    "border-brand-solid": "var(--joy-palette-Primary-Brand-1000)",
    "border-error": "var(--joy-palette-red-600)",
    "border-error-solid": "var(--joy-palette-red-1000)",
    "border-success": "var(--joy-palette-green-600)",
    "border-success-solid": "var(--joy-palette-green-1000)",
    "border-warning": "var(--joy-palette-yellow-600)",
    "border-warning-solid": "var(--joy-palette-yellow-1000)",
    "border-info": "var(--joy-palette-blue-800)",
    "border-info-solid": "var(--joy-palette-blue-1000)",
    "border-brand-secondary": "var(--joy-palette-Secondary-Brand-600)",
    "border-brand-secondary-solid": "var(--joy-palette-Secondary-Brand-1000)",
    "border-primary-2-100": "var(--joy-palette-black-100)",
  },
  foreground: {
    "fg-white": "var(--joy-palette-base-White)",
    "fg-disabled": "var(--joy-palette-black-200)",
    "fg-brand-primary": "var(--joy-palette-Primary-Brand-1000)",
    "fg-brand-secondary": "var(--joy-palette-Secondary-Brand-1000)",
    "fg-error-primary": "var(--joy-palette-red-1000)",
    "fg-error-secondary": "var(--joy-palette-red-800)",
    "fg-warning-primary": "var(--joy-palette-yellow-1000)",
    "fg-warning-secondary": "var(--joy-palette-yellow-800)",
    "fg-success-primary": "var(--joy-palette-green-1000)",
    "fg-success-secondary": "var(--joy-palette-green-800)",
    "fg-black": "var(--joy-palette-base-black)",
    "fg-info-primary": "var(--joy-palette-blue-1000)",
    "fg-info-secondary": "var(--joy-palette-blue-800)",
    "fg-primary": "var(--joy-palette-black-1000)",
    "fg-secondary": "var(--joy-palette-black-800)",
    "fg-tertiary": "var(--joy-palette-black-700)",
    "fg-brand-tertiary": "var(--joy-palette-Sage-1000)",
  },
  background: {
    "bg-white": "var(--joy-palette-base-White)",
    "bg-black": "var(--joy-palette-base-black)",
    "bg-success-secondary": "var(--joy-palette-green-100)",
    "bg-success-solid": "var(--joy-palette-green-1000)",
    "bg-success-primary": "var(--joy-palette-green-200)",
    "bg-warning-primary": "var(--joy-palette-yellow-100)",
    "bg-warning-secondary": "var(--joy-palette-yellow-300)",
    "bg-warning-solid": "var(--joy-palette-yellow-1000)",
    "bg-error-primary": "var(--joy-palette-red-100)",
    "bg-error-secondary": "var(--joy-palette-red-300)",
    "bg-error-solid": "var(--joy-palette-red-1000)",
    "bg-info-primary": "var(--joy-palette-blue-100)",
    "bg-info-secondary": "var(--joy-palette-blue-300)",
    "bg-info-solid": "var(--joy-palette-blue-1000)",
    "bg-brand-solid": "var(--joy-palette-Primary-Brand-1000)",
    "bg-brand-solid_hover": "var(--joy-palette-Primary-Brand-900)",
    "bg-brand-solid-secondary": "var(--joy-palette-Secondary-Brand-1000)",
    "bg-brand-solid-hover": "var(--joy-palette-Secondary-Brand-700)",
    "bg-shadow-200": "var(--joy-palette-black-200)",
    "bg-gray": "var(--joy-palette-black-100)",
    "bg-gray-300": "var(--joy-palette-black-300)",
    "bg-black-sec": "var(--joy-palette-black-1000)",
    "bg-brand-solid_hover-2": "var(--joy-palette-Primary-Brand-200)",
    "bg-brand-secondary": "var(--joy-palette-Primary-Brand-100)",
    "bg-brand-solid-secondary-light": "var(--joy-palette-Secondary-Brand-100)",
    "bg-brand-solid-secondary-2": "var(--joy-palette-secondary-brand-100)",
    "bg-shadow-600": "var(--joy-palette-black-600)",
  },
};
export const componentColorsLight = {
  button: {
    "button-primary-bg": "var(--joy-palette-background-bg-brand-solid)",
    "button-primary-hover":
      "var(--joy-palette-background-bg-brand-solid-hover)",
    "button-primary-border": "var(--joy-palette-border-border-brand)",
    "button-primary-disabled": "var(--joy-palette-foreground-fg-disabled)",
    "button-primary-text": "var(--joy-palette-text-text-white)",
    "button-primary-text-2": "var(--joy-palette-text-text-disabled)",
    "button-primary-disabled-text": "var(--joy-palette-text-text-disabled)",

    "button-secondary-bg": "var(--joy-palette-background-bg-gray)",
    "button-secondary-hover": "var(--joy-palette-background-bg-gray-300)",
    "button-secondary-border":
      "var(--joy-palette-border-border-brand-secondary)",
    "button-secondary-disabled": "var(--joy-palette-foreground-fg-disabled)",
    "button-secondary-text": "var(--joy-palette-text-text-primary)",
    "button-secondary-text-2": "var(--joy-palette-tex-text-secondary)",
    "button-secondary-disabled-text": "var(--joy-palette-text-text-disabled)",

    "button-outlined-hover": "var(--joy-palette-background-bg-shadow-200)",
    "button-outlined-border": "var(--joy-palette-border-border-primary-300)",
    "button-outlined-text": "var(--joy-palette-text-text-primary)",
    "button-outlined-disabled-text": "var(--joy-palette-text-text-disabled)",
    "button-outlined-disabled": "var(--joy-palette-foreground-fg-disabled)",

    "button-text-hover": "var(--joy-palette-background-bg-shadow-200)",
    "button-text-border": "var(--joy-palette-border-border-primary-300)",
    "button-text-text": "var(--joy-palette-primary-text)",
    "button-text-text-2": "var(--joy-palette-text-secondary)",
    "button-text-disabled": "var(--joy-palette-foreground-fg-disabled)",
    "button-text-disabled-text": "var(--joy-palette-text-text-disabled)",
  },
};

export const colors = {
  light: {
    palette: {
      ...primitiveColorsLight,
      ...semanticColorsLight,
      ...componentColorsLight,
    },
  },
};
