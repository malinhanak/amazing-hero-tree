import { Icon } from "components/Icon";

export const ToggleMarvel = ({ isDC, toggleHeroUniTheme }) => {
    return isDC ? (
        <Icon iconName="marvel" action={toggleHeroUniTheme}>
            click me for
        </Icon>
    ) : null;
};
