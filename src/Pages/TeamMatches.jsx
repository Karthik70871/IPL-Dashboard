import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/TeamMatches.css";

const TeamMatches = () => {
  const { teamName } = useParams();
  const [team, setTeam] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7576/team/${teamName}`)
      .then((response) => response.json())
      .then((data) => {
        setTeam(data);
        setMatches(data.matches);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, [teamName]);

  return (
    <div className="team-matches-container">
      {team && <h2>{team.teamName} Matches</h2>}
      {matches.map((match, index) => (
        <div className="match-card" key={index}>
          <h3>{match.team1} vs {match.team2}</h3>
          <p>Date: {match.date}</p>
          <p>Venue: {match.venue}</p>
          <p className="match-winner">Winner: {match.matchWinner}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMatches;
