import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import useClientes from "../hooks/useClientes";
import useVisivel from "../hooks/useVisivel";

const clientes = [];

export default function Home() {
  const {
    adicionarCliente,
    removerCliente,
    alterarCliente,
    clienteAtual,
    clientes,
    setClienteAtual,
  } = useClientes([]);

  const { tabelaVisivel, mostrarFormulario, mostrarTabela } = useVisivel();

  function onSelect(cliente: Cliente) {
    setClienteAtual(cliente);
    mostrarFormulario();
  }

  function onClienteMudou(cliente: Cliente) {
    cliente.id === clienteAtual.id
      ? alterarCliente(cliente)
      : adicionarCliente(cliente);

    mostrarTabela();
  }

  function novoCliente() {
    setClienteAtual(Cliente.Vazio());
    mostrarFormulario();
  }

  return (
    <div
      className="flex h-screen justify-center items-center
    
    bg-gradient-to-r to-purple-500 from-blue-500
    text-white 
    "
    >
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
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
              clienteSelecionado={onSelect}
              clienteExcluido={removerCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={clienteAtual}
            onCancelar={mostrarTabela}
            onClienteMudou={onClienteMudou}
          />
        )}
      </Layout>
    </div>
  );
}
