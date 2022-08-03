// import styles from "../styles/*.module.css";

import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface propsInt {
  cliente?: Cliente;
  children?: any;
  className?: string;
  onCancelar?: () => any;
  onClienteMudou?: (client: Cliente) => any;
}

export default function Formulario(props: propsInt) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div className={`${props.className}`}>
      {id && <Entrada className="mb-2" texto="Código" value={id} />}
      <Entrada
        className="mb-2"
        texto="Nome"
        value={nome}
        valorMudou={setNome}
      />
      <Entrada
        texto="Idade"
        value={idade}
        tipo="number"
        className="mb-2"
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-3 gap-2">
        <Botao
          cor="blue"
          onClick={props.onClienteMudou.bind(
            null,
            new Cliente(nome, +idade, id)
          )}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onClick={props.onCancelar}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
