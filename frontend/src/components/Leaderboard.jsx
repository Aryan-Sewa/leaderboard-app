import React from 'react';
import TopThreeCard from './TopThreeCard';
import UserRow from './UserRow';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
  if (!leaderboard.length) return <div>No data available</div>;

  const topThree = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="leaderboard">
      <div className="top-three">
        {topThree.map((user, i) => (
          <TopThreeCard key={user._id} user={user} rank={i + 1} />
        ))}
      </div>

      <div className="rest-list">
        {rest.map((user, i) => (
          <UserRow key={user._id} user={user} rank={i + 4} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;