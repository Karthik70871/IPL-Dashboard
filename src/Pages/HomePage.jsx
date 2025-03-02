// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/HomePage.css";

// const HomePage = () => {
//   const [teams, setTeams] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:7576/team") // Ensure backend is running
//       .then(response => response.json())
//       .then(data => setTeams(data))
//       .catch(error => console.error("Error fetching teams:", error));
//   }, []);

//   return (
//     <div className="homepage">
//       <h2>IPL Teams</h2>
//       <div className="teams-list">
//         {teams.map(team => (
//           <Link key={team.id} to={`/team/${team.teamName}`} className="team-tile">
//             <h3>{team.teamName}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
