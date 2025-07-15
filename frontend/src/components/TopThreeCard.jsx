import React from 'react';
import './Leaderboard.css';

const TopThreeCard = ({ user, rank }) => {
  const rankClass = ['first', 'second', 'third'][rank - 1];
  const maskedPoints = maskPoints(user.score);

  return (
    <div className={`top-card ${rankClass}`}>
      <div className="crown">{rank === 1 ? '👑' : rank === 2 ? '👑' : '👑'}</div>
      <img src={user.avatar || '/default.png'} alt={user.name} className="avatar-large" />
      <div className="user-name">{user.name}</div>
      <div className="user-points">{maskedPoints} 🪙</div>
    </div>
  );
};

const maskPoints = (points) => {
  if (points === undefined || points === null) return '';
  const str = points.toString();
  if (str.length <= 2) return str;
  return str[0] + '****' + str[str.length - 1];
};

export default TopThreeCard;
