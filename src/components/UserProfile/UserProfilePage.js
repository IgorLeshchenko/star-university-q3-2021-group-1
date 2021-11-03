import React, { useState } from 'react';
import UserProfile from './UserProfile';
import UserProfileSettings from './UserProfileSettings';
import classes from './UserProfilePage.module.css';
import ChangeSettingsModal from './ChangeSettingsModal';

const UserProfilePage = (props) => {
  // const [isActive, setIsActive] = useState(false);

  // const onButtunClickHandler = (props) => {
  //   console.log('clicked');
  //   // setIsActive(true);
  // };

  return (
    <div className={classes.container}>
      <UserProfileSettings />
      <UserProfile />
      {isActive && <ChangeSettingsModal />}
    </div>
  );
};

export default UserProfilePage;
