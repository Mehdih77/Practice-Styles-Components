import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import MyGlobalStyle from "../styles/globalStyles";
import { themes } from "../styles/variables"; // USE variables in anywhere

//! EXPORT : handle it in another file
// const MyGlobalStyle = createGlobalStyle`
//   body {
//     background-color: #c7c7c7;
//   }
// `;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <MyGlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
