import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./theme/GlobalStyle";
import "@fontsource/open-sans-condensed";
import "@fontsource/open-sans";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
