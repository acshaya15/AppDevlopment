import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./profiledisplay.css";
function DisplayProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch user profiles from your backend API
    async function fetchProfiles() {
      try {
        const response = await axios.get('http://localhost:8080/getuser'); // Replace with your actual API endpoint
        setProfiles(response.data); // Assuming the API response is an array of user profiles
      } catch (err) {
        console.error('Error fetching profiles:', err);
      }
    }

    fetchProfiles();
  }, []);

  return (
    <div className='user_profile'>
    
     
        {profiles.map((profile) => (
          <div style={{listStyle:"none"}} key={profile.id}>
            <img className="profile_img"src={profile.userimg} alt={profile.username} />
            <h6 className='user_profile_username'> {profile.username}</h6>
            <p className='user_profile_name'> {profile.name}</p>
            <p className='user_profile_bio'>{profile.bio}</p>
          </div>
        ))}
      {/* </ul> */}
    </div>
  );
}

export default DisplayProfiles;
