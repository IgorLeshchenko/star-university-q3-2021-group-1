import React from "react";
import Layout from "../../components/layout";

import UserProfile from "../../components/userProfile/UserProfile";
import UserProfileSettings from "../../components/userProfile/UserProfileSettings";

import { useStyles } from "./style";

const UserScreen: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <UserProfileSettings />
        <UserProfile />
      </div>
    </Layout>
  );
};

export default UserScreen;
