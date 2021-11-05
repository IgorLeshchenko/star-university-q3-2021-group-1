import React from "react";
import UserProfile from "./UserProfile";
import UserProfileSettings from "./UserProfileSettings";
import { useStyles } from "./UserProfilePageStyles";

const UserProfilePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <UserProfileSettings />
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
