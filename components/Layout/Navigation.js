import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useBreakpoints from "../../hooks/useBreakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faHome,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Navigation = () => {
  
  const { isMobile } = useBreakpoints();

  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => {
    setNavOpen(prevState => !prevState)
  }

  const navLinks = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Github", path: "https://github.com/MrWebMD", icon: faGithub },
    {
      name: "API",
      path: "https://www.balldontlie.io/#introduction",
      icon: faRocket,
    },
  ];

  let navItems = navLinks.map((link, index) => {
    let isActive = router.pathname === link.path;

    let classNames = `${
      isMobile ? styles["nav__item--mobile"] : styles["nav__item"]
    } ${isActive ? styles["nav__item--active"] : ""}`;

    if (isMobile) {
      // classNames = styles["nav__item--mobile"]
    }

    return (
      <Link key={index} href={link.path} target="_blank">
        <li  className={classNames}>
          <FontAwesomeIcon icon={link.icon} className={styles["nav__icon"]} />
          {link.name}
        </li>
      </Link>
    );
  });

  return (
    <nav className={(isMobile ? styles["nav--mobile"] : styles["nav"]) +" " + (navOpen ? styles["nav--mobileOpen"] : "")}>
      <div
        className={
          isMobile ? styles["nav__wrapper--mobile"] : styles["nav__wrapper"]
        }
      >
        <div className={styles["nav__logo-wrapper"]}>
          <div>
            <img
              src="/images/logo-small.png"
              className={
                isMobile ? styles["nav__logo--mobile"] : styles["nav__logo"]
              }
            />
          </div>
          {isMobile && <h1>Kiss The Rim</h1>}

          {isMobile && <FontAwesomeIcon
            icon={faBars}
            className={styles["nav__menu-button"]}
            onClick={toggleNavigation}
          />}
        </div>

        <ul
          className={
            isMobile ? styles["nav__list--mobile"] : styles["nav__list"]
          }
        >
          {navItems}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
