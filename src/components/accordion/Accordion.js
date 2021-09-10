import React from "react";
import styled from "styled-components";

/*
Main Accordion Wrapper, takes in children and optional isSub, which defaults
to false since Accordion doesn't have to be used on any sub folder.
*/

function Accordion({ children, isSub = false }) {
    return <AccordionStyle isSub={isSub}>{children}</AccordionStyle>;
}

export default Accordion;

const AccordionStyle = styled.div`
    margin-left: ${(props) => (props.isSub ? "1.5rem" : "0")};
`;
