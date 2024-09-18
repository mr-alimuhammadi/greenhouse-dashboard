import { NavLink } from "react-router-dom";
import styles from "./navbar-link.module.scss";
import { ReactElement } from "react";

interface Props {
  text: string;
  icon: ReactElement;
  link: string;
  className?: string;
}
export default function NavbarLink(props: Props) {
  return (
    <NavLink to={props.link} className={props.className}>
      <div className={styles.innerBox}>
        <div className={styles.icon}>{props.icon}</div>
        <div>{props.text}</div>
      </div>
    </NavLink>
  );
}
