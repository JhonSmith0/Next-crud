// import styles from "../styles/*.module.css";

import Titulo from "./Titulo";

interface propsInt {
  titulo: string;
  children?: any;
}

export default function Layout(props: propsInt) {
  return (
    <div className="flex flex-col rounded-md w-2/3 bg-white text-gray-800">
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  );
}
