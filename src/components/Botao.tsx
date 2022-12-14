// import styles from "../styles/*.module.css";

interface propsInt {
  cor?: "green" | "blue" | "gray";
  children?: any;
  className?: string;
  onClick?: () => any;
}

export default function Botao(props: propsInt) {
  return (
    <button
      onClick={props.onClick}
      className={`
  bg-gradient-to-r
  from-${props.cor || "blue"}-400
  to-${props.cor || "blue"}-700
  px-4
  py-2
  text-white
  rounded-md
  ${props.className}
  `}
    >
      {props.children}
    </button>
  );
}
