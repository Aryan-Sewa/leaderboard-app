import React from 'react';

const UserSelector = ({ users, selectedUser, setSelectedUser, addUser }) => {
    return (
        <div>
            <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                <option value="">Select User</option>
                {users.map((user) => (<option key={user._id} value={user._id}>{user.name}</option>))}
            </select>

            <button onClick={addUser}>+ Add User</button>
        </div>
    );
};

export default UserSelector;