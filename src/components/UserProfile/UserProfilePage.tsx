import React from 'react';
import UserProfile from './UserProfile';
import UserProfileSettings from './UserProfileSettings';
import classes from './UserProfilePage.module.css';

const UserProfilePage = () => {
  return (
    <div className={classes.container}>
      <UserProfileSettings />
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
