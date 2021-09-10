import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";

const Providers = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything from @testing-library/react
export * from "@testing-library/react";

// takes my customRender and overrites the original render
export { customRender as render };
