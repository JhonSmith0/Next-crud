// import styles from "../styles/*.module.css";

interface propsInt {
  texto: string;
  value: string | number;
  tipo?: "text" | "number";
  readOnly?: boolean;

  children?: any;
  className?: string;
  valorMudou?: (e: any) => any;
}

export default function Entrada(props: propsInt) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-4">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        onChange={({ target: { value } }) => props.valorMudou?.(value)}
        className={`
        border
        border-purple-500
        bg-gray-50
        px-4 py-2
        rounded-lg
        focus:outline-none
        ${props.readOnly ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
