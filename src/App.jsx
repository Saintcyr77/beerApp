import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Header/Search/Search";
import { Container } from "@mui/material";
import Footer from "./components/Footer/Footer";

const FavoritesPage = lazy(() => import("./Pages/Favorite/FavoritesPage"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="page-container">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route
              path="/favorites"
              element={
                <Suspense fallback={<Suspense />}>
                  <FavoritesPage />
                </Suspense>
              }
            />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
