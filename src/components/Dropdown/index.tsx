// Imports
import { useState, Children } from "react";

// Styles
import { Icon, library } from "lib/FontAwesome/Icon";
import styles from "./Dropdown.module.css";

// Component
import { DropdownSectionPropsType } from "types/Dropdown.type";

export default function DropdownSection({
  title,
  content,
}: DropdownSectionPropsType) {
  // Set dropdown active state or not
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <section>
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className={styles.dropdownHeader}
      >
        <h2>{title}</h2>

        <Icon
          name={isOpen ? library.caretUp : library.caretDown}
          styling={styles.dropdownIcon}
        />
      </div>

      {isOpen && (
        <div className={styles.dropdownBody}>
          {Array.isArray(content) ? (
            Children.toArray(
              content.map((c) => (
                <p>
                  {c}
                  <br />
                </p>
              ))
            )
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </section>
  );
}
