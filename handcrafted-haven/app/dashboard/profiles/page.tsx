// pages/profiles.js

import React, { useState, useEffect } from 'react';

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/profiles');
      const data = await response.json();
      setProfiles(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
