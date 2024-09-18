import styles from "./side-navbar.module.scss";
import classNames from "../../../utils/classnames";
import NavbarLink from "./navbar-link";
import { IconHome } from "../../icons/home";
import { IconReports } from "../../icons/reports";
import { IconSettings } from "../../icons/settings";
import { IconAccount } from "../../icons/account";
import { IconExit } from "../../icons/exit";
import { IconClose } from "../../icons/close";
import Button from "../../button/button";
import variables from "../../../styles/variables.module.scss";

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
      <div
        className={styles.emptyArea}
        onClick={() => setIsVisible(false)}
      ></div>
      <div className={styles.sideNavbar}>
        <div className={styles.closeButtonContainer}>
          <Button
            className={styles.closeButton}
            theme="transparent"
            color={"text_secondary"}
            onClick={() => setIsVisible(false)}
          >
            <IconClose color={variables.textSecondary} />
          </Button>
        </div>
        <ul>
          <li>
            <NavbarLink
              link="."
              text="داشبورد"
              icon={<IconHome color={variables.primaryColor} />}
              className={styles.home}
              onClick={() => setIsVisible(false)}
            />
          </li>
          <li>
            <NavbarLink
              link="."
              text="گزارش"
              icon={<IconReports color={variables.textSecondaryColor} />}
              onClick={() => setIsVisible(false)}
            />
          </li>
          <li>
            <NavbarLink
              link="."
              text="تنظیمات"
              icon={<IconSettings color={variables.textSecondaryColor} />}
              onClick={() => setIsVisible(false)}
            />
          </li>
          <li>
            <NavbarLink
              link="."
              text="حساب کاربری"
              icon={<IconAccount color={variables.textSecondaryColor} />}
              onClick={() => setIsVisible(false)}
            />
          </li>
          <hr className={styles.line} />
          <li>
            <NavbarLink
              link="."
              text="خروج"
              icon={<IconExit color={variables.dangerColor} />}
              onClick={() => setIsVisible(false)}
              className={styles.exit}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
