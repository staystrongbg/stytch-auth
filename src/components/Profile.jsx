import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
const Profile = () => {
  const { currentUser } = useUserContext();

  return (
    <>
      <h1>Profile Page</h1>
      {currentUser?.user?.emails[0] && (
        <p>
          You are logged in as <b>{currentUser.user.emails[0].email}</b>
        </p>
      )}
    </>
  );
};

export default Profile;
