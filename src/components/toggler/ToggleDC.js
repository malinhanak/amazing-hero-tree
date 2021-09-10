import { Icon } from "components/Icon";

export const ToggleDC = ({ isDC, toggleHeroUniTheme }) => {
    return isDC ? null : (
        <Icon iconName="dc-comics" action={toggleHeroUniTheme}>
            click me for
        </Icon>
    );
};
