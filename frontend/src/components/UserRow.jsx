import React from 'react';
import './Leaderboard.css';

const UserRow = ({ user, rank }) => {
  const maskedPoints = maskPoints(user.score);  // <-- use user.score instead of totalPoints

  return (
    <div className="user-row">
      <div className="user-rank">{rank}</div>
      <img src={user.avatar || '/default.png'} alt={user.name} className="avatar-small" />
      <div className="user-name">{user.name}</div>
      <div className="user-points">{maskedPoints} 🪙</div>
    </div>
  );
};

const maskPoints = (points) => {
  if (points === undefined || points === null) return ''; // handle undefined/null
  const str = points.toString();
  if (str.length <= 2) return str; // if short, return as is
  return str[0] + '****' + str[str.length - 1];
};

export default UserRow;
