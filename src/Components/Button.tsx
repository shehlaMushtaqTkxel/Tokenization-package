import { Components, Theme } from "@mui/joy";

declare module "@mui/joy/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    primary: true;
    outlined: true;
    text: true;
    plain: false;
    soft: false;
    solid: false;
  }
  interface ButtonPropsSizeOverrides {
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}

type ButtonThemeProps = Components<Theme>["JoyButton"] | undefined;

export const Button: ButtonThemeProps = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }: { theme: Theme; ownerState: any }) => {
      //@ts-ignore
      const layoutHeight: any = theme.vars.layoutHeight;
      //@ts-ignore
      const layoutSpacing: any = theme.vars.layoutSpacing;
      return {
        ...(ownerState.variant === "primary" && {
          color: theme.vars.palette.button["button-primary-text"],
          backgroundColor: theme.vars.palette.button?.["button-primary-bg"],
          borderColor: theme.vars.palette.button?.["button-primary-border"],
          "&:hover": {
            backgroundColor:
              theme.vars.palette.button?.["button-primary-hover"],
          },
          "&:disabled": {
            backgroundColor:
              theme.vars.palette.button?.["button-primary-disabled"],
            color: theme.vars.palette.button["button-primary-disabled-text"],
          },
        }),
        ...(ownerState.variant === "secondary" && {
          color: theme.vars.palette.button["button-secondary-text"],
          backgroundColor: theme.vars.palette.button?.["button-secondary-bg"],
          borderColor: theme.vars.palette.button?.["button-secondary-border"],

          "&:hover": {
            backgroundColor:
              theme.vars.palette.button?.["button-secondary-hover"],
          },
          "&:disabled": {
            backgroundColor:
              theme.vars.palette.button?.["button-secondary-disabled"],
            color: theme.vars.palette.button["button-secondary-disabled-text"],
          },
        }),
        ...(ownerState.variant === "outlined" && {
          color: theme.vars.palette.button["button-outlined-text"],
          border: theme.vars.palette.button?.["button-outlined-border"],
          // borderColor: "red",
          borderWidth: "1px",

          "&:hover": {
            backgroundColor:
              theme.vars.palette.button?.["button-outlined-hover"],
          },
          "&:disabled": {
            backgroundColor:
              theme.vars.palette.button?.["button-outlined-disabled"],
            color: theme.vars.palette.button["button-outlined-disabled-text"],
          },
        }),
        ...(ownerState.variant === "text" && {
          color: theme.vars.palette.button["button-text-text"],
          borderColor: theme.vars.palette.button?.["button-text-border"],
          "&:hover": {
            backgroundColor: theme.vars.palette.button?.["button-text-hover"],
          },
          "&:disabled": {
            backgroundColor:
              theme.vars.palette.button?.["button-text-disabled"],
            color: theme.vars.palette.button["button-text-disabled-text"],
          },
        }),
        ...(ownerState.size === "sm" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["xxs"],
          fontWeight: theme.vars.fontWeight["Medium"],
          lineHeight: theme.vars.lineHeight["xs"],
          paddingTop: layoutSpacing?.["md"],
          paddingBottom: layoutSpacing?.["md"],
          paddingLeft: layoutSpacing?.["xl"],
          paddingRight: layoutSpacing?.["xl"],
          gap: layoutSpacing?.["xs"],
          borderRadius: theme.vars.radius["md"],
          height: layoutHeight["xs"],
        }),
        ...(ownerState.size === "md" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["sm"],
          fontWeight: theme.vars.fontWeight["Medium"],
          lineHeight: theme.vars.lineHeight["sm"],
          border: theme.vars.radius["md"],
          paddingTop: layoutSpacing?.["lg"],
          paddingBottom: layoutSpacing?.["lg"],
          paddingLeft: layoutSpacing?.["2xl"],
          paddingRight: layoutSpacing?.["2xl"],
          gap: layoutSpacing?.["xs"],
          borderRadius: theme.vars.radius["md"],
          height: layoutHeight["sm"],
        }),
        ...(ownerState.size === "lg" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["sm"],
          fontWeight: theme.vars.fontWeight["Medium"],
          lineHeight: theme.vars.lineHeight["sm"],
          border: theme.vars.radius["md"],
          paddingTop: layoutSpacing?.["xl"],
          paddingBottom: layoutSpacing?.["xl"],
          paddingLeft: layoutSpacing?.["3xl"],
          paddingRight: layoutSpacing?.["3xl"],
          gap: layoutSpacing?.["xs"],
          borderRadius: theme.vars.radius["md"],
          height: layoutHeight["md"],
        }),
        ...(ownerState.size === "xl" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["sm"],
          fontWeight: theme.vars.fontWeight["Medium"],
          lineHeight: theme.vars.lineHeight["sm"],
          border: theme.vars.radius["md"],
          paddingTop: layoutSpacing?.["xl"],
          paddingBottom: layoutSpacing?.["xl"],
          paddingLeft: layoutSpacing?.["4xl"],
          paddingRight: layoutSpacing?.["4xl"],
          gap: layoutSpacing?.["xs"],
          borderRadius: theme.vars.radius["lg"],
        }),
        ...(ownerState.size === "2xl" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["sm"],
          fontWeight: theme.vars.fontWeight["Medium"],
          lineHeight: theme.vars.lineHeight["sm"],
          border: theme.vars.radius["md"],
          paddingTop: layoutSpacing?.["lg"],
          paddingBottom: layoutSpacing?.["lg"],
          paddingLeft: layoutSpacing?.["2xl"],
          paddingRight: layoutSpacing?.["2xl"],
          gap: layoutSpacing?.["xs"],
          borderRadius: theme.vars.radius["md"],
          height: layoutHeight["xl"],
        }),
      };
    },
    // startDecorator: ({
    //   ownerState,
    //   theme,
    // }: {
    //   theme: Theme;
    //   ownerState: any;
    // }) => {
    //   return {
    //     backgroundColor: theme.vars.palette.background?.["bg-error-secondary"],
    //     display: "flex",
    //     alignItems: "center",
    //     padding: "5px",
    //     ".MuiSvgIcon-root": {
    //       fontSize: theme.vars.fontSize["12xl"],
    //     },
    //   };
    // },
  },
};
