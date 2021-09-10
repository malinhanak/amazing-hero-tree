import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	html, body {
		padding: 0;
		margin: 0;
		font-size: 16px;
		font-family: "Open Sans";
		max-width: 100vw;
		overflow-x: hidden;
	}

	html {
		min-height: 100vh;
		background: url(${(props) => props.theme.images.background});
		background-size: cover;
		${
            "" /* -webkit-mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
		mask-image: -webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))); */
        }
		transition: all 0.50s linear;
	}

	body {
		min-height: 100vh;
		background: linear-gradient(
                to bottom,
                rgba(${(props) => props.theme.colors.body}, 0.3),
                rgba(${(props) => props.theme.colors.body}, 0.3)
            );
		background-size: cover; 
	}
`;
