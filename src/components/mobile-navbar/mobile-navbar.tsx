import { useState } from "react";
import Button from "../button/button";
import { IconThreeLine } from "../icons/three-line";
import SideNavbar from "./components/side-navbar";
import styles from "./mobile-navbar.module.scss";

export default function MobileNavbar() {
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.userAvatarContainer}>
          <img src="static/images/user-profile.jpg" alt="user avatar" />
        </div>
        <Button
          className={styles.navButton}
          theme="transparent"
          color="text_secondary"
          onClick={() => {
            setIsSideNavbarVisible(true);
          }}
        >
          <IconThreeLine />
        </Button>
      </nav>
      <div className={styles.header}>
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" width="24" height="24" rx="12" fill="white" />
          <rect y="16" width="16" height="16" rx="8" fill="white" />
        </svg>
        داشبورد
      </div>
      <SideNavbar
        isVisible={isSideNavbarVisible}
        setIsVisible={setIsSideNavbarVisible}
      />
    </>
  );
}
