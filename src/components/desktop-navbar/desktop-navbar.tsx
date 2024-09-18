import NavbarLink from "./components/navbar-link";
import styles from "./desktop-navbar.module.scss";
import variables from "../../styles/variables.module.scss";
import { IconReports } from "../icons/reports";
import { IconSettings } from "../icons/settings";
import { IconAccount } from "../icons/account";
import { IconExit } from "../icons/exit";
import { IconHome } from "../icons/home";

export default function DesktopNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.userAvatarContainer}>
        <img src="static/images/user-profile.jpg" alt="user avatar" />
      </div>
      <NavbarLink
        className={styles.home}
        link="."
        text="داشبود"
        icon={<IconHome color={variables.primaryColor} />}
      />
      <NavbarLink link="." text="گزارش" icon={<IconReports />} />
      <NavbarLink link="." text="تنظیمات" icon={<IconSettings />} />
      <NavbarLink link="." text="حساب کاربری" icon={<IconAccount />} />
      <hr className={styles.line} />
      <NavbarLink
        className={styles.exit}
        link="."
        text="خروج"
        icon={<IconExit color={variables.dangerColor} />}
      />
    </nav>
  );
}
