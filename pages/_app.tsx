import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import MyGlobalStyle from "../styles/globalStyles";
import { themes } from "../styles/variables";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <MyGlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
