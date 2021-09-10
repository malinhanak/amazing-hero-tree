import { useCallback, useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

export function useDCTheme() {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useDCTheme must be used within a ThemeProvider");

    const { isDC, setIsDC } = context;
    const toggleHeroUniTheme = useCallback(() => {
        setIsDC((prevMode) => !prevMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDC]);

    return {
        isDC,
        toggleHeroUniTheme,
    };
}
