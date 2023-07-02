// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Styling
import "./index.css";

// Performances
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
