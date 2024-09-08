import styles from "./main-layout.module.scss";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
