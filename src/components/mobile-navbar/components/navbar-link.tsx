import { NavLink } from "react-router-dom";
import styles from "./navbar-link.module.scss";
import { MouseEventHandler, ReactElement } from "react";

interface Props {
  text: string;
  icon: ReactElement;
  link: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export default function NavbarLink(props: Props) {
  return (
    <NavLink
      to={props.link}
      className={props.className}
      onClick={props.onClick}
    >
      <div className={styles.innerBox}>
        <div className={styles.icon}>{props.icon}</div>
        <div>{props.text}</div>
      </div>
    </NavLink>
  );
}
