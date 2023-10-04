import React, { useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    username: 'exampleUser',
    // Add other user data fields (e.g., age, dob, contact)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle user data update logic (e.g., send data to a backend API)
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />
        {/* Add other user data fields here */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
