// Imports
import { BrowserRouter as Router } from "react-router-dom";

import Header from "components/Header";
import AppRouter from "router/AppRouter";
import Footer from "components/Footer";

export default function App() {
  return (
    <Router>
      <Header />

      <AppRouter />

      <Footer />
    </Router>
  );
}
