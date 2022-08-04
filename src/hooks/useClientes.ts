import { useState } from "react";
import Cliente from "../core/Cliente";

export default function useClientes(clientesList?: Cliente[]) {
  const [clientes, setClientes] = useState(clientesList ?? []);
  const [clienteAtual, setClienteAtual] = useState(null);
  function adicionarCliente(cliente: Cliente) {
    setClientes([...clientes, cliente]);
  }
  function removerCliente(cliente: Cliente) {
    const copy = [...clientes];
    const i = copy.findIndex((obj) => obj.id === cliente.id);

    console.log(cliente, i);
    copy.splice(i, 1);
    setClientes(copy);
  }

  function alterarCliente(cliente: Cliente) {
    const copy = [...clientes];
    const i = copy.findIndex((obj) => obj.id === cliente.id);
    const [before, after] = [copy.slice(0, i), copy.slice(i + 1)];
    setClientes([...before, cliente, ...after]);
  }

  return {
    adicionarCliente,
    removerCliente,
    alterarCliente,

    clienteAtual,
    setClienteAtual,
    clientes,
  };
}
