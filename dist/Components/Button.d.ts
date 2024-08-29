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
export declare const Button: ButtonThemeProps;
export {};
//# sourceMappingURL=Button.d.ts.map