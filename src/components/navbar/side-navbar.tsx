import styles from "./side-navbar.module.scss";
import { NavLink } from "react-router-dom";
import classNames from "../../utils/classnames";

export default function SideNavbar({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) {
  return (
    <div
      {...classNames(
        styles.sideNavbarContainer,
        isVisible ? styles.visible : ""
      )}
    >
      <div className={styles.sideNavbar}>
        <div className={styles.brand}>Greenhouse Dashboard</div>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={styles.navLink}
              onClick={() => setIsVisible(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/reports"}
              className={styles.navLink}
              onClick={() => setIsVisible(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={styles.emptyArea}
        onClick={() => setIsVisible(false)}
      ></div>
    </div>
  );
}
