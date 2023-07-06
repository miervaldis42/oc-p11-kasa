// Imports
import HeroSection from "components/Hero/HeroSection";

// Styles
import styles from "./Home.module.css";

// Component
export default function Home() {
  return (
    <main className={styles.home}>
      <HeroSection />
    </main>
  );
}
