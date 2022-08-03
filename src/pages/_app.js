import "../styles/globals.css";
import "../firebase/config";
import { useEffect } from "react";
import ColecaoCliente from "../firebase/db/ColecaoCliente";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new ColecaoCliente().obterTodos();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
