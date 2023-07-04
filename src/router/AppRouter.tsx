// Imports
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import pathList from "./pathList";

// Routes
import Home from "pages/Home";
import Custom404 from "pages/404";
const AccommodationRecord = React.lazy(
  () => import("pages/Accommodation/AccommodationRecord")
);
const About = React.lazy(() => import("pages/About/About"));

// Router of the project which allows Single Page Application app to act like a multiple page one.
export default function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={pathList.home} element={<Home />} />
        <Route
          path={`${pathList.accommodation}/:id`}
          element={<AccommodationRecord />}
        />

        <Route path={pathList.about} element={<About />} />

        {/* Fallback if nothing matches */}
        <Route path={pathList[404]} element={<Custom404 />} />
      </Routes>
    </Suspense>
  );
}
