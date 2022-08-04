import { useState } from "react";

export default function useVisivel() {
  function mostrarTabela() {
    setVisivel("tabela");
  }
  function mostrarFormulario() {
    setVisivel("form");
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const tabelaVisivel = visivel === "tabela";
  const formVisivel = visivel === "form";

  return {
    tabelaVisivel,
    formVisivel,
    mostrarTabela,
    mostrarFormulario,
  };
}
