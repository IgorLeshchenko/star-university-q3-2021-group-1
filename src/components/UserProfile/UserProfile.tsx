import React from "react";
import UserAvatar from "./assets/user-avatar.webp";
// import classes from './UserProfile.module.css';
// import { Avatar } from '@material-ui/core';
import { useStyles } from "./UserProfileStyle";
// import Badge from '@material-ui/core/Badge';
// import Avatar from '@material-ui/core/Avatar';
// import Stack from '@material-ui/core/Stack';

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.user_info_wrap}>
      <div>
        <img src={UserAvatar} alt="user-avatar" width="200px" height="200px" />
      </div>
      <div className={classes.user_name_wrap}>Username</div>
      <div className={classes.reputation_wrap}>
        Reputation: <span className={classes.reputation_score}>100</span>
      </div>
    </div>
  );
};

export default UserProfile;
