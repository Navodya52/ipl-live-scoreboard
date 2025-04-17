import React from 'react';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <div className="card">
      <h2>{match.team1} vs {match.team2}</h2>
      <p><strong>Score:</strong> {match.score}</p>
      <p><strong>Overs:</strong> {match.overs}</p>
      <p><strong>Status:</strong> {match.status}</p>
    </div>
  );
};

export default MatchCard;
