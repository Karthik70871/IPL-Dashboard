import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MatchesPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MatchesPage = () => {
  const { teamName } = useParams();
  const [matches, setMatches] = useState([]);
  const [year, setYear] = useState(2020);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/team/${encodeURIComponent(teamName)}/matches?year=${year}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched matches:", data);
        setMatches(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [teamName, year]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{teamName} Matches</h1>

      {/* Year Selection Dropdown */}
      <div className="mb-3 text-center">
        <label htmlFor="yearSelect" className="form-label">Select Year:</label>
        <select
          id="yearSelect"
          className="form-select w-auto d-inline-block"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {Array.from({ length: 17 }, (_, i) => 2008 + i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center">Loading matches...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card match-card shadow">
                <div className="card-header bg-primary text-white">
                  {match.team1} vs {match.team2}
                </div>
                <div className="card-body">
                  <p><strong>Date:</strong> {match.date}</p>
                  <p><strong>Venue:</strong> {match.venue}</p>

                  {/* Toss Result - Dynamic Sentence */}
                  <p><strong>Toss:</strong> {match.tossWinner} won and chose to {match.tossDecision}.</p>

                  {/* Match Result - Dynamic Sentence */}
                  <p><strong>Result:</strong> {match.matchWinner} won by {match.resultMargin} {match.result}.</p>

                  <p><strong>Player of the Match:</strong> {match.playerOfMatch}</p>
                  <p className="text-muted">Umpires: {match.umpire1}, {match.umpire2}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No matches found for {year}</p>
        )}
      </div>
    </div>
  );
};

export default MatchesPage;
