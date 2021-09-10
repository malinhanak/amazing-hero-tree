import { createContext } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";
import { useLocalStorage } from "hooks/useLocalStorage";
import { themeMarvel, themeDC } from "theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDC, setIsDC] = useLocalStorage("heroUni");
    const isDCTheme = isDC ? themeDC : themeMarvel;
    return (
        <ThemeContext.Provider value={{ isDC, setIsDC }}>
            <BaseThemeProvider theme={isDCTheme}>{children}</BaseThemeProvider>
        </ThemeContext.Provider>
    );
};
