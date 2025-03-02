import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeamsPage from "./Pages/TeamsPage";
import MatchesPage from "./Pages/MatchesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TeamsPage />} />
        <Route path="/team/:teamName" element={<MatchesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
