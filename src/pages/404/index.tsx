// Styles
import { Link } from "react-router-dom";

import pathList from "router/pathList";

// Styles
import styles from "./Custom404.module.css";

// Component
export default function Custom404() {
  return (
    <div className={styles.errorPage}>
      <>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </>

      <Link to={pathList.home} className={styles.hyperlink}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
