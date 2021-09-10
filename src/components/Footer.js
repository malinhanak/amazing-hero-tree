import React from "react";
import styled from "styled-components";
import HeroToggler from "components/HeroToggler";
import { ToggleDC, ToggleMarvel } from "components/toggler";

function Footer() {
    return (
        <FooterStyle>
            <h1>Amazing Hero Univers Tree</h1>
            <HeroToggler>
                <ToggleMarvel />
                <ToggleDC />
            </HeroToggler>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = styled.footer`
    padding: 1rem 1.5rem;
    background: rgba(${(props) => props.theme.colors.primary}, 0.8);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
        font-weight: 200;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
`;
