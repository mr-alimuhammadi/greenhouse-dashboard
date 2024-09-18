import DesktopNavbar from "../components/desktop-navbar/desktop-navbar";
import MobileNavbar from "../components/mobile-navbar/mobile-navbar";
import styles from "./main-layout.module.scss";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
