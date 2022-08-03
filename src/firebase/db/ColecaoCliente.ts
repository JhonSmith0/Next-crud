import Cliente from "../../core/Cliente";
import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { db } from "../config";

import { collection, getDocs } from "firebase/firestore";

export default class ColecaoCliente {
  private conversor = {
    // Converte o cliente para ser guardado no servidor da firebase
    toFireStore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    // Recebe o cliente do servidor e converte para um objeto cliente
    fromFireStore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions) {
      const data = snapshot.data(options);
      return new Cliente(data.nome, data.idade, data.id);
    },
  };
  async salvar(cliente: Cliente): Promise<Cliente> {
    return null;
  }
  async excluir(cliente: Cliente): Promise<void> {
    return null;
  }
  async obterTodos(): Promise<Cliente[]> {
    const snapshot = await getDocs(collection(db, "clientes"));
    snapshot.forEach((doc) => console.log(doc.data()));

    return null;
  }
}
