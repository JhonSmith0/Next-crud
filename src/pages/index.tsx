import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

const clientes = [
  new Cliente("nom1", 1, "1"),
  new Cliente("nom2", 2, "2"),
  new Cliente("nom3", 3, "3"),
  new Cliente("nom4", 4, "4"),
];
export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio());
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("excluido", cliente);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);

    clientes.push(cliente);
    setVisivel("tabela");
  }

  function novoCliente() {
    setCliente(Cliente.Vazio());
    setVisivel("formulario");
  }

  return (
    <div
      className="flex h-screen justify-center items-center
    
    bg-gradient-to-r to-purple-500 from-blue-500
    text-white 
    "
    >
      <Layout titulo="Cadastro simples">
        {visivel === "tabela" ? (
          <>
            <Botao
              onClick={novoCliente}
              className="ml-auto block mb-4"
              cor="green"
            >
              Novo Cliente
            </Botao>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            onCancelar={setVisivel.bind(null, "tabela")}
            onClienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
