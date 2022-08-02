import Botao from "../components/Botao";
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
  function clienteSelecionado(cliente: Cliente) {
    console.log("selecionado", cliente);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("excluido", cliente);
  }

  return (
    <div
      className="flex h-screen justify-center items-center
    
    bg-gradient-to-r to-purple-500 from-blue-500
    text-white 
    "
    >
      <Layout titulo="Cadastro simples">
        <Botao className="mb-4" cor="blue">
          Testando
        </Botao>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
