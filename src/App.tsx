import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="movies/:id" element={<div>Popular</div>} />
        <Route path="movies/:type" element={<div>Top Rated</div>} />
        <Route path="/*" element={<div>Upcoming</div>} />
      </Routes>
    </div>
  );
}

export default App;
