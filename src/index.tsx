import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { LoginProvider } from "./helpers/loginContext"
import { theme } from "./theme/index"

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.colors.BACKGROUND};
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your Message, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
