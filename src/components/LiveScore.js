import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';

const LiveScore = () => {
  const [matches, setMatches] = useState([]);

  const fetchScores = async () => {
    try {
      // Replace this URL with a real cricket live score API
      const response = await axios.get('/mockData.json'); // temporary mock data
      setMatches(response.data.matches);
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 30000); // refresh every 30 secs
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
};

export default LiveScore;
