import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/users');
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get('http://localhost:5000/leaderboard');
    setLeaderboard(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  const handleClaim = async () => {
    await axios.post(`http://localhost:5000/claim/${selectedUser}`);
    fetchUsers();
    fetchLeaderboard();
  };

  const addUser = async () => {
    const name = prompt('Enter new user name');
    if (!name) return;
    await axios.post('http://localhost:5000/users', { name });
    fetchUsers();
    fetchLeaderboard();
  };

  return (
    <div>
      <h1>🏆 Leaderboard</h1>

      <UserSelector
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        addUser={addUser}
      />

      <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} />

      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
};

export default App;