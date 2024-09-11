import { ReactElement } from "react";
import styles from "./loading-mask.module.scss";
import classNames from "../../utils/classnames";

interface Props {
  message: string;
  loading: boolean;
  children: ReactElement;
  maskZIndex: number;
  maskClassName?: string;
  messageBoxClassName?: string;
  spinner?: ReactElement;
}
export default function loadingMask(props: Props) {
  return (
    <div className={styles.container}>
      <div>{props.children}</div>
      <div
        {...classNames(
          props.loading ? styles.loadingMask : styles.hideMask,
          props.maskClassName ?? ""
        )}
        style={{ zIndex: props.maskZIndex }}
      >
        <div
          {...classNames(styles.messageBox, props.messageBoxClassName ?? "")}
        >
          {props.message}
          {props.spinner ?? ""}
        </div>
      </div>
    </div>
  );
}
