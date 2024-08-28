import { TypographySystemOptions } from "@mui/joy/styles/types";

declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    "h1.regular": true;
    "h1.medium": true;
    "h1.semibold": true;
    "h1.bold": true;
    "h2.regular": true;
    "h2.medium": true;
    "h2.semibold": true;
    "h2.bold": true;
    "h3.regular": true;
    "h3.medium": true;
    "h3.semibold": true;
    "h3.bold": true;
    "h4.regular": true;
    "h4.medium": true;
    "h4.semibold": true;
    "h4.bold": true;
    "h5.regular": true;
    "h5.medium": true;
    "h5.semibold": true;
    "h5.bold": true;
    "h6.regular": true;
    "h6.medium": true;
    "h6.semibold": true;
    "h6.bold": true;

    "lg.regular": true;
    "lg.medium": true;
    "lg.semibold": true;
    "lg.bold": true;

    "xl.regular": true;
    "xl.medium": true;
    "xl.semibold": true;
    "xl.bold": true;

    "md.regular": true;
    "md.medium": true;
    "md.semibold": true;
    "md.bold": true;

    "sm.regular": true;
    "sm.medium": true;
    "sm.semibold": true;
    "sm.bold": true;

    "xs.regular": true;
    "xs.medium": true;
    "xs.semibold": true;
    "xs.bold": true;

    "legend.regular": true;
    "legend.medium": true;
    "legend.semibold": true;
    "legend.bold": true;
  }
}
export const typography: Partial<TypographySystemOptions> = {
  "h1.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h1.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h1.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h1.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    
    // paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h2.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-20xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-23xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h2.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-20xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-23xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h2.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-20xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-23xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h2.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-20xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-23xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h3.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-14xl)",
    lineHeight: "var(--joy-lineHeight-3xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-14xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h3.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-14xl)",
    lineHeight: "var(--joy-lineHeight-3xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-14xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h3.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-14xl)",
    lineHeight: "var(--joy-lineHeight-3xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-14xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h3.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-14xl)",
    lineHeight: "var(--joy-lineHeight-3xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-14xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h4.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-8xl)",
    lineHeight: "var(--joy-lineHeight-2xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-8xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h4.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-8xl)",
    lineHeight: "var(--joy-lineHeight-2xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-8xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h4.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-8xl)",
    lineHeight: "var(--joy-lineHeight-2xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-8xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h4.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-8xl)",
    lineHeight: "var(--joy-lineHeight-2xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-8xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h5.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-5xl)",
    lineHeight: "var(--joy-lineHeight-md)",
    paragraphSpacing: "var(--joy-paragraphSpacing-4xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h5.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-5xl)",
    lineHeight: "var(--joy-lineHeight-md)",
    paragraphSpacing: "var(--joy-paragraphSpacing-4xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h5.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-5xl)",
    lineHeight: "var(--joy-lineHeight-md)",
    paragraphSpacing: "var(--joy-paragraphSpacing-4xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h5.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-5xl)",
    lineHeight: "var(--joy-lineHeight-md)",
    paragraphSpacing: "var(--joy-paragraphSpacing-4xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h6.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-2xl)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-lg)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h6.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-2xl)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-lg)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h6.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-2xl)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-lg)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "h6.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-2xl)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-lg)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xl.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xl.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xl.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xl.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-26xl)",
    lineHeight: "var(--joy-lineHeight-4xl)",
    paragraphSpacing: "var(--joy-paragraphSpacing-26xl)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "lg.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-lg)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-md)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "lg.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-lg)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-md)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "lg.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-lg)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-md)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "lg.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-lg)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-md)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "md.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-sm)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "md.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-sm)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "md.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-sm)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "md.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-sm)",
    lineHeight: "var(--joy-lineHeight-sm)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "sm.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-xs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "sm.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-xs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "sm.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-xs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "sm.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-xs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xs.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xs.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xs.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "xs.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "legend.regular": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-regular)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "legend.medium": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-medium)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "legend.semibold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-semiBold)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
  "legend.bold": {
    fontFamily: "var(--joy-fontFamily-inter)",
    fontWeight: "var(--joy-fontWeight-bold)",
    fontSize: "var(--joy-fontSize-xxs)",
    lineHeight: "var(--joy-lineHeight-xs)",
    paragraphSpacing: "var(--joy-paragraphSpacing-xxs)",
    letterSpacing: "var(--joy-letterSpacing-none)",
  },
};
