import React from "react";

import GlobalStyle from "./styles/global";

import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Toast } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toast />

      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
