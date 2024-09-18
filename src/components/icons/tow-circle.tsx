import styles from "./icons.module.scss";
import variables from "../../styles/variables.module.scss";

export function IconReports({ color }: { color?: string }) {
  return (
    <i className={styles.icon}>
      <svg
        width="40"
        height="32"
        viewBox="0 0 40 32"
        fill={color ?? variables.textPrimaryColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="16" width="24" height="24" rx="12" />
        <rect y="16" width="16" height="16" rx="8" />
      </svg>
    </i>
  );
}
