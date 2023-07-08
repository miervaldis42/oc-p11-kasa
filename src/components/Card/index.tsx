// Styles
import styles from "./Card.module.css";

// Component
import { AccommodationCardPropsType } from "types/Accommodation.type";

export default function Card({ url, img, title }: AccommodationCardPropsType) {
  return (
    <a href={url}>
      <article
        className={styles.card}
        style={{ backgroundImage: `url(${img})` }}
      >
        <p>{title}</p>
      </article>
    </a>
  );
}
