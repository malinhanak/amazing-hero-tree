import DCbg from "../assets/quinn.jpeg";
import { baseTheme } from "./baseTheme";

export const themeDC = {
    ...baseTheme,
    images: {
        background: DCbg,
    },
    colors: {
        ...baseTheme.colors,
        secondary: "170, 48, 94",
    },
};
