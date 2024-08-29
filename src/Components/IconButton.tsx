import { Components, Theme } from "@mui/joy";

declare module "@mui/joy/IconButton" {
  interface IconButtonPropsVariantOverrides {
    outline: true;
    plain: true;
    soft: true;
  }
}
type IconButtonThemeProps = Components<Theme>["JoyIconButton"] | undefined;
export const IconButton: IconButtonThemeProps = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }: { theme: Theme; ownerState: any }) => ({
      ...(ownerState.variant === "outline" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize["xs"],
        fontWeight: theme.vars.fontWeight["Regular"],
        lineHeight: theme.vars.lineHeight["md"],
        color: theme.vars.palette.text["primary-text"],
        backgroundColor: theme.vars.palette.background["bg-black"],
        borderRadius: theme.vars.radius["sm"],
        "&:hover": {
          backgroundColor: theme.vars.palette.background?.["bg-black"],
        },
      }),
      ...(ownerState.variant === "plain" && {
        fontFamily: theme.vars.fontFamily.inter,
        fontSize: theme.vars.fontSize["xs"],
        fontWeight: theme.vars.fontWeight["Regular"],
        lineHeight: theme.vars.lineHeight["md"],
        color: theme.vars.palette.text["text-secondary"],
        backgroundColor: theme.vars.palette.background?.["bg-black"],
        borderRadius: theme.vars.radius["sm"],
        "&:hover": {
          backgroundColor: theme.vars.palette.background?.["bg-black"],
        },
        "&:focus": {
          backgroundColor:
            theme.vars.palette.background?.["bg-brand-solid-secondary-2"],
        },
      }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "success" && {
          fontFamily: theme.vars.fontFamily.inter,
          fontSize: theme.vars.fontSize["lg"],
          fontWeight: theme.vars.fontWeight["Regular"],
          lineHeight: theme.vars.lineHeight["md"],
          color: "red",
          backgroundColor: theme.vars.palette.background?.["bg-black"],
          borderRadius: theme.vars.radius["lg"],
          "&:hover": {
            backgroundColor: theme.vars.palette.background?.["bg-black"],
          },
        }),
    }),
    loadingIndicator: ({
      ownerState,
      theme,
    }: {
      theme: Theme;
      ownerState: any;
    }) => {
      return {
        backgroundColor: theme.vars.palette.text["text-success-primary"],
      };
    },
  },
};
