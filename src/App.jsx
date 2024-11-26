import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;