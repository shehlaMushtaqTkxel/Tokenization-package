import { CssVarsThemeOptions, extendTheme } from "@mui/joy";
import { colors } from "../Tokens/colors";
import { fontSize } from "../Tokens/fontSize";
import { fontWeight } from "../Tokens/fontWeight";
import { fontFamily } from "../Tokens/fontFamily";
import { lineHeight } from "../Tokens/lineHeight";
import { spacing } from "../Tokens/spacing";
import { radius } from "../Tokens/radius";
import { typography } from "../Tokens/typography";
import { letterSpacing } from "../Tokens/letterSpacing";
import { paragraphSpacing } from "../Tokens/paragraphSpacing";
import { height } from "../Tokens/height";

import { Button } from "../Components/Button";
// import { IconButton } from "../Components/IconButton";

export const theme: CssVarsThemeOptions = extendTheme({
  //tokens
  colorSchemes: colors,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  typography,
  // @ts-ignore
  layoutSpacing: spacing as any,
  layoutHeight: height as any,
  //@ts-ignore
  letterSpacing,
  paragraphSpacing,
  radius,
  components: {
    JoyButton: Button,
    // JoyIconButton: IconButton,
  },
});
