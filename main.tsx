import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import { theme } from "./src/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider
      defaultMode="light"
      disableTransitionOnChange
      //@ts-ignore
      theme={theme}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
    </CssVarsProvider>
  </React.StrictMode>
);
