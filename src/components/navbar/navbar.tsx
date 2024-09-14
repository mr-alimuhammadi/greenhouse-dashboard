import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useState } from "react";
import SideNavbar from "./side-navbar";
import UserProfileCard from "../user-profile-card/user-profile-card";

export default function Navbar() {
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.right}>
          <button
            type="button"
            className={styles.sideNavbarButton}
            onClick={() => setIsSideNavbarVisible(true)}
          >
            <i className="bi bi-list"></i>
          </button>
          <Link to={"/"} className={styles.brand}>
            داشبورد گلخونه من
          </Link>
          <NavLink
            to={"/"}
            className={styles.navLink}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            صفخه اصلی
          </NavLink>
          <NavLink
            to={"/reports"}
            className={styles.navLink}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            گزارشات
          </NavLink>
        </div>
        <div className={styles.left}>
          <UserProfileCard />
        </div>
      </nav>
      <SideNavbar
        isVisible={isSideNavbarVisible}
        setIsVisible={setIsSideNavbarVisible}
      />
    </>
  );
}
