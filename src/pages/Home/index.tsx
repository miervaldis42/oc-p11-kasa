// Imports
import { useState, useCallback, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";
import pathList from "router/pathList";

// Components
import HeroSection from "components/Hero/HeroSection";
import Card from "components/Card";

// API
import customRequest from "utils/customFetch";

// Styles
import styles from "./Home.module.css";

// Component
import {
  AccommodationType,
  AccommodationsCardInfoType,
  AccommodationsType,
} from "types/Accommodation.type";

export default function Home() {
  // Redirection
  const navigate = useNavigate();

  // Accommodation Data
  const [accommodationsCardInfo, setAccommodationsCardInfo] =
    useState<AccommodationsCardInfoType>([]);

  const fetchAccommodationsInfo = useCallback(async () => {
    try {
      const data: AccommodationsType = await customRequest(
        "/dummy_Accommodations.json"
      );

      const shortAccommodationsInfoCard: AccommodationsCardInfoType = data.map(
        (a: AccommodationType) => {
          return {
            url: a.id,
            img: a.cover,
            title: a.title,
          };
        }
      );

      setAccommodationsCardInfo(shortAccommodationsInfoCard);
    } catch (error) {
      navigate(pathList[404]);
    }
  }, [navigate]);

  useEffect(() => {
    fetchAccommodationsInfo();
  }, [fetchAccommodationsInfo]);

  return (
    <main className={styles.home}>
      <HeroSection />

      {accommodationsCardInfo.length > 0 && (
        <div className={styles.gallery}>
          {Children.toArray(
            accommodationsCardInfo.map((a) => (
              <Card
                url={`${pathList.accommodation}/${a.url}`}
                img={a.img}
                title={a.title}
              />
            ))
          )}
        </div>
      )}
    </main>
  );
}
