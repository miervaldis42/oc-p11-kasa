// Imports
import { Suspense, useState } from "react";

// Components
import { Icon, library } from "lib/FontAwesome/Icon";

// Types
import { CarouselPropsType } from "types/Carousel.type";

// Styles
import styles from "./Carousel.module.css";
import { ReactComponent as Logo } from "assets/logo.svg";

// Component
export default function Carousel({ images }: CarouselPropsType) {
  const [number, setNumber] = useState(0);

  const switchPicture = (number: number, action: string) => {
    if (number === 0 && action === "previous") {
      setNumber(images.length - 1);
    } else if (number === images.length - 1 && action === "next") {
      setNumber(0);
    } else {
      setNumber((prevState) =>
        action === "previous" ? --prevState : ++prevState
      );
    }

    return number;
  };

  return (
    <div className={styles.carousel}>
      <Suspense fallback={<Logo className={styles.loading} />}>
        <img src={images[number]} alt="Logement sous plusieurs angles" />

        {images.length > 1 && (
          <>
            <p className={styles.pagination}>{`${number + 1} / ${
              images.length
            }`}</p>

            <div className={styles.carouselActionButtons}>
              <div onClick={() => switchPicture(number, "previous")}>
                <Icon name={library.caretLeft} styling={styles.carouselIcons} />
              </div>

              <div onClick={() => switchPicture(number, "next")}>
                <Icon
                  name={library.caretRight}
                  styling={styles.carouselIcons}
                />
              </div>
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
}
