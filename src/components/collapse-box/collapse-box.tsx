import styles from "./collapse-box.module.scss";
import { useRef } from "react";

interface Props {
  collapse: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function CollapseBox(props: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={divRef}
      className={styles.collapse}
      style={{
        maxHeight: props.collapse ? 0 : divRef.current?.scrollHeight + "px",
      }}
    >
      {/* because of some styles that may break max-height role */}
      <div className={props.className}>{props.children}</div>
    </div>
  );
}
