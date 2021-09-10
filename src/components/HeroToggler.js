import React from "react";
import { useDCTheme } from "hooks/useDCTheme";

const HeroToggler = ({ children }) => {
    const { isDC, toggleHeroUniTheme } = useDCTheme();
    return (
        <>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    isDC,
                    toggleHeroUniTheme,
                });
            })}
        </>
    );
};

export default HeroToggler;
