import React from "react";
import { Link } from "react-router-dom";
import "../styles/TeamsPage.css";

// Import team logos
import CSKLogo from "../assets/teams/CSK.avif";
import MILogo from "../assets/teams/MI.avif";
import RCBLogo from "../assets/teams/RCB.avif";
import KKRLogo from "../assets/teams/KKR.avif";
import DCLogo from "../assets/teams/DC.avif";
import RRLogo from "../assets/teams/RR.avif";
import PBKSLogo from "../assets/teams/PBKS.avif";
import SRHLogo from "../assets/teams/SRH.avif";

// Map of team names to logos
const teamLogos = {
  "Chennai Super Kings": CSKLogo,
  "Mumbai Indians": MILogo,
  "Royal Challengers Bangalore": RCBLogo,
  "Kolkata Knight Riders": KKRLogo,
  "Delhi Capitals": DCLogo,
  "Rajasthan Royals": RRLogo,
  "Punjab Kings": PBKSLogo,
  "Sunrisers Hyderabad": SRHLogo,
};

// List of IPL teams
const teams = [
  "Chennai Super Kings",
  "Mumbai Indians",
  "Royal Challengers Bangalore",
  "Kolkata Knight Riders",
  "Delhi Capitals",
  "Rajasthan Royals",
  "Punjab Kings",
  "Sunrisers Hyderabad",
];

const TeamsPage = () => {
  return (
    <div className="teams-container">
      {teams.map((team) => (
        <Link to={`/team/${team}`} key={team} className="team-card">
          <img src={teamLogos[team]} alt={team} className="team-logo" />
          <h3>{team}</h3>
        </Link>
      ))}
    </div>
  );
};

export default TeamsPage;
