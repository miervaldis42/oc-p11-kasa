// Styles
import styles from "./Tag.module.css";

// Type
type TagPropsType = { name: string };

// Component
export default function Tag({ name }: TagPropsType) {
  return (
    <div className={styles.tag}>
      <p>{name}</p>
    </div>
  );
}
