import Marvelbg from "../assets/marvel.jpeg";
import { baseTheme } from "./baseTheme";

export const themeMarvel = {
    ...baseTheme,
    images: {
        background: Marvelbg,
    },
    colors: {
        ...baseTheme.colors,
        secondary: "177, 91, 56",
    },
};
