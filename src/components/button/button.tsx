import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "../../utils/classnames";

interface Props {
  type?: "button" | "reset" | "submit";
  className?: string;
  theme?: "normal" | "outline" | "transparent";
  color?:
    | "primary"
    | "secondary"
    | "gray"
    | "danger"
    | "text_primary"
    | "text_secondary"
    | "bg_secondary";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
export default function Button(props: Props) {
  return (
    <button
      {...classNames(
        styles.button,
        props.className ?? "",
        styles[props.theme ?? "normal"],
        styles[props.color ?? "primary"]
      )}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
