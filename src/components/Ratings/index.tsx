// Imports
import { Children } from "react";

// Styles
import styles from "./Ratings.module.css";
import { Icon, library } from "lib/FontAwesome/Icon";

// Component
export default function Ratings({ number }: { number: number }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    i < number ? stars.push(true) : stars.push(false);
  }

  return (
    <div className={styles.ratings}>
      {Children.toArray(
        stars.map((s) => (
          <Icon
            name={library.star}
            styling={s ? styles.star : styles.emptyStar}
          />
        ))
      )}
    </div>
  );
}
