import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

/*
Very simple AccordionTitle components.
Makes used of Icon component to show either + - depending on if the folder
is open or not. It also takes in an onClick action, in this case to open
or close folders.
*/

function AccordionTitle({ id, action, isOpen }) {
    const handleFolderOpenState = () => action(id);
    return (
        <TitleStyle
            onClick={handleFolderOpenState}
            style={{ cursor: "pointer" }}
        >
            <Icon iconName={isOpen ? "minus" : "plus"} small={true} />{" "}
            <span>{id}</span>
        </TitleStyle>
    );
}

export default AccordionTitle;

const TitleStyle = styled.h4`
    margin: 0;
    padding: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
`;
