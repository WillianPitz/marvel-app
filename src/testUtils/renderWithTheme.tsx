import React from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
