// Imports
import { useState, useCallback, useEffect, Children } from "react";
import { redirect, useParams } from "react-router-dom";
import pathList from "router/pathList";

// API
import customRequest from "utils/customFetch";

// Components
import Carousel from "components/Carousel";
import Tag from "components/Tag";
import DropdownSection from "components/Dropdown";
import Ratings from "components/Ratings";

// Styles
import styles from "./AccommodationRecord.module.css";
import { Icon, library } from "lib/FontAwesome/Icon";

// Component
import {
  AccommodationType,
  AccommodationsType,
} from "types/Accommodation.type";

export default function AccommodationRecord() {
  // Redirection
  const { id } = useParams();

  // Accommodation Data
  const [accommodation, setAccommodation] = useState<
    AccommodationType | undefined
  >();

  const fetchAccommodationInfo = useCallback(async () => {
    try {
      const data: AccommodationsType = await customRequest(
        "/dummy_accommodations.json"
      );

      const selectedAccommodation = data.find((a) => a.id === id);

      // Redirection if the id does not match any in the dummy database
      selectedAccommodation === undefined
        ? redirect(pathList[404])
        : setAccommodation(selectedAccommodation);
    } catch (error) {
      redirect(pathList[404]);
    }
  }, [id]);

  const ratingStars: JSX.Element[] = [];

  for (let i = 0; i === 5; i++) {
    for (let j = 0; j <= accommodation!.rating; j++) {
      ratingStars.push(
        <Icon
          key={i}
          name={library.star}
          styling={i <= accommodation!.rating ? styles.star : styles.emptyStar}
        />
      );
    }
  }

  useEffect(() => {
    fetchAccommodationInfo();
  }, [fetchAccommodationInfo]);

  return (
    <>
      {accommodation !== undefined && (
        <div className={styles.recordPage}>
          <Carousel images={accommodation.pictures} />

          <div className={styles.record}>
            <div className={styles.mainInfo}>
              <h1>{accommodation.title}</h1>
              <p className={styles.subtitle}>{accommodation.location}</p>

              <div className={styles.tags}>
                {Children.toArray(
                  accommodation.tags.map((t) => <Tag name={t} />)
                )}
              </div>
            </div>

            <div className={styles.host}>
              <Ratings number={accommodation.rating} />

              <div className={styles.hostInfo}>
                <p>
                  {accommodation.host.name.split(" ")[0]}
                  <br /> {accommodation.host.name.split(" ")[1]}
                </p>
                <img
                  src={accommodation.host.picture}
                  alt="Propriétaire du logement"
                />
              </div>
            </div>
          </div>

          <div className={styles.accommodationDetails}>
            <DropdownSection
              title="Description"
              content={accommodation.description}
            />
            <DropdownSection
              title="Équipements"
              content={accommodation.equipments}
            />
          </div>
        </div>
      )}
    </>
  );
}
