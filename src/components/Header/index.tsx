// Imports
import { NavLink, Link, useLocation } from "react-router-dom";

import pathList from "router/pathList";

// Styles
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "assets/logo.svg";

// Component
export default function Header() {
  // Check if the current page is the Home page
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <header className={styles.header}>
      <Link
        to={isHomePage ? "#" : pathList.home}
        style={{ cursor: `${isHomePage ? "default" : "pointer"}` }}
      >
        <Logo className={styles.logo} />
      </Link>

      {/* Navbar */}
      <nav>
        <ul>
          <li>
            <NavLink
              to={pathList.home}
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.navLink}`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={pathList.about}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.active}`
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
