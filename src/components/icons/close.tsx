import styles from "./icons.module.scss";
import variables from "../../styles/variables.module.scss";

export function IconClose({ color }: { color?: string }) {
  return (
    <i className={styles.icon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={color ?? variables.textPrimaryColor}
      >
        <path d="M2.14602 2.8539C2.09953 2.80741 2.06266 2.75222 2.0375 2.69148C2.01234 2.63074 1.99939 2.56564 1.99939 2.4999C1.99939 2.43416 2.01234 2.36906 2.0375 2.30832C2.06266 2.24758 2.09953 2.19239 2.14602 2.1459C2.19251 2.09941 2.2477 2.06254 2.30844 2.03738C2.36918 2.01222 2.43428 1.99927 2.50002 1.99927C2.56577 1.99927 2.63087 2.01222 2.6916 2.03738C2.75234 2.06254 2.80753 2.09941 2.85402 2.1459L8.00002 7.2929L13.146 2.1459C13.1925 2.09941 13.2477 2.06254 13.3084 2.03738C13.3692 2.01222 13.4343 1.99927 13.5 1.99927C13.5658 1.99927 13.6309 2.01222 13.6916 2.03738C13.7523 2.06254 13.8075 2.09941 13.854 2.1459C13.9005 2.19239 13.9374 2.24758 13.9625 2.30832C13.9877 2.36906 14.0007 2.43416 14.0007 2.4999C14.0007 2.56564 13.9877 2.63074 13.9625 2.69148C13.9374 2.75222 13.9005 2.80741 13.854 2.8539L8.70702 7.9999L13.854 13.1459C13.9005 13.1924 13.9374 13.2476 13.9625 13.3083C13.9877 13.3691 14.0007 13.4342 14.0007 13.4999C14.0007 13.5656 13.9877 13.6307 13.9625 13.6915C13.9374 13.7522 13.9005 13.8074 13.854 13.8539C13.8075 13.9004 13.7523 13.9373 13.6916 13.9624C13.6309 13.9876 13.5658 14.0005 13.5 14.0005C13.4343 14.0005 13.3692 13.9876 13.3084 13.9624C13.2477 13.9373 13.1925 13.9004 13.146 13.8539L8.00002 8.7069L2.85402 13.8539C2.80753 13.9004 2.75234 13.9373 2.6916 13.9624C2.63087 13.9876 2.56577 14.0005 2.50002 14.0005C2.43428 14.0005 2.36918 13.9876 2.30844 13.9624C2.2477 13.9373 2.19251 13.9004 2.14602 13.8539C2.09953 13.8074 2.06266 13.7522 2.0375 13.6915C2.01234 13.6307 1.99939 13.5656 1.99939 13.4999C1.99939 13.4342 2.01234 13.3691 2.0375 13.3083C2.06266 13.2476 2.09953 13.1924 2.14602 13.1459L7.29302 7.9999L2.14602 2.8539Z" />
      </svg>
    </i>
  );
}
