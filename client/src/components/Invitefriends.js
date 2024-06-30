import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'blue', padding: '10px', color: 'white' }}>
      <h2>Hostel Room Allocation</h2>
    </nav>
  );
};

const InviteFriends = ({ onInvite }) => {
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');

  const handleInvite = () => {
    onInvite({ name: friendName, email: friendEmail, status: 'Pending' });
    setFriendName('');
    setFriendEmail('');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>Invite Your Friends:</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={friendEmail}
          onChange={(e) => setFriendEmail(e.target.value)}
        />
      </div>
      <button onClick={handleInvite}>Invite</button>
    </div>
  );
};

const InvitedList = ({ invitedFriends }) => {
  return (
    <div style={{ margin: '20px' }}>
      <h3>Invited List:</h3>
      <ul>
        {invitedFriends.map((friend, index) => (
          <li key={index}>
            <strong>Name:</strong> {friend.name}, <strong>Email:</strong>{' '}
            {friend.email}, <strong>Status:</strong> {friend.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [invitedFriends, setInvitedFriends] = useState([]);

  const handleInvite = (friend) => {
    setInvitedFriends([...invitedFriends, friend]);
  };

  return (
    <div>
      <InviteFriends onInvite={handleInvite} />
      <InvitedList invitedFriends={invitedFriends} />
    </div>
  );
};

export default App;
