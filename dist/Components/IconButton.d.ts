import { Components, Theme } from "@mui/joy";
declare module "@mui/joy/IconButton" {
    interface IconButtonPropsVariantOverrides {
        outline: true;
        plain: true;
        soft: true;
    }
}
type IconButtonThemeProps = Components<Theme>["JoyIconButton"] | undefined;
export declare const IconButton: IconButtonThemeProps;
export {};
//# sourceMappingURL=IconButton.d.ts.map