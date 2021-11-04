import React from 'react';
import UserAvatar from '../../img/user-avatar.webp';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={classes.user_info_wrap}>
      <div>
        <img src={UserAvatar} alt="user-avatar" width="200px" height="200px" />
      </div>
      <div>Username</div>
      <div>
        Reputation: <span>100</span>
      </div>
    </div>
  );
};

export default UserProfile;
