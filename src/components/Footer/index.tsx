// Imports
import { ReactComponent as Logo } from "assets/logo.svg";
import { library, Icon } from "lib/FontAwesome/Icon";

// Styles
import styles from "./Footer.module.css";

// Component
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />

      <p>
        <Icon name={library.copyright} styling={styles.copyright} /> 2020 Kasa.
        All rights reserved
      </p>
    </footer>
  );
}
