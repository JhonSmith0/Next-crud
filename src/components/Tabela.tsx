// import styles from "../styles/*.module.css";

import Cliente from "../core/Cliente";
import { pen, trash } from "./icons";

interface propsInt {
  clientes: Cliente[];
  children?: any;
  clienteSelecionado?: (cliente: Cliente) => any;
  clienteExcluido?: (cliente: Cliente) => any;
}

export default function Tabela(props: propsInt) {
  const { clienteSelecionado, clienteExcluido } = props;
  const exibirAcoes = clienteSelecionado || clienteExcluido;

  function renderizarTabela() {
    return (
      <tr>
        <th className="border  collapse p-2">Código</th>
        <th className="border  collapse p-2">Nome</th>
        <th className="border  collapse p-2">Idade</th>
        {exibirAcoes && <th className="border  collapse p-2">Ações</th>}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => (
      <tr className={`${i % 2 === 0 ? "bg-purple-200" : ""}`}>
        <td className={`p-2`}>{cliente.id}</td>
        <td className={`p-2`}>{cliente.nome}</td>
        <td className={`p-2`}>{cliente.idade}</td>
        {exibirAcoes && renderizarAcoes(cliente)}
      </tr>
    ));
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center ">
        {clienteSelecionado && (
          <button
            onClick={clienteSelecionado?.bind(null, cliente)}
            className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1 "
          >
            {pen}
          </button>
        )}
        {clienteExcluido && (
          <button
            onClick={clienteExcluido?.bind(null, cliente)}
            className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1 "
          >
            {trash}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full text-center border-collapse">
      <thead
        className="
        rounded-xl
        overflow-hidden
      bg-gradient-to-r
      from-purple-500
      to-purple-800
      text-gray-100
      "
      >
        {renderizarTabela()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
