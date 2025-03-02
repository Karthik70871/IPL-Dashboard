import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import CSS

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/team`) // ✅ Fetching teams from backend
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* IPL Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/src/assets/logos/ipl-logo.png" alt="IPL Logo" className="ipl-logo" />
          <span className="ms-5">IPL Dashboard</span>
        </Link>

        {/* Navbar Links */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            {/* Teams Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="teamsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teams
              </Link>
              <ul className="dropdown-menu" aria-labelledby="teamsDropdown">
                {teams.length === 0 ? (
                  <li><span className="dropdown-item text-muted">Loading...</span></li>
                ) : (
                  teams.map((team) => (
                    <li key={team.id}>
                      <Link to={`/team/${team.teamName}`} className="dropdown-item">
                        {team.teamName}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
