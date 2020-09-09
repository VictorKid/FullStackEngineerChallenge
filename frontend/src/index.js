import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

const theme = {
  fontSize: {
    header: "2.0em",
    secTitle: "1.2em",
  },
  fontColor: {
    header: "#262626",
    secTitle: "#464646",
  },
  fontWeight: {
    header: "bold",
    secTitle: "bold",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
