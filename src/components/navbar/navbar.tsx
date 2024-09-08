import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useState } from "react";
import SideNavbar from "./side-navbar";

export default function Navbar() {
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <button
          type="button"
          className={styles.sideNavbarButton}
          onClick={() => setIsSideNavbarVisible(true)}
        >
          <i className="bi bi-list"></i>
        </button>
        <Link to={"/"} className={styles.brand}>
          Greenhouse Dashboard
        </Link>
        <NavLink
          to={"/"}
          className={styles.navLink}
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to={"/reports"}
          className={styles.navLink}
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Reports
        </NavLink>
      </nav>
      <SideNavbar
        isVisible={isSideNavbarVisible}
        setIsVisible={setIsSideNavbarVisible}
      />
    </>
  );
}
