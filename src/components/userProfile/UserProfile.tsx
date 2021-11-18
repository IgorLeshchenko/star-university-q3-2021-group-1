import React, { useState } from "react";
import { useStyles } from "./UserProfileStyle";
import { getCookie } from "../../app/helpers/utils";
import API from "../../app/api/index";

const UserProfile = () => {
  const [userReputation, setUserReputation] = useState("");

  const currentUser = getCookie("username");
  API.UserRequest.getUserByUsername(currentUser).then(response => {
    setUserReputation(response.reputation);
    return response.reputation;
  });

  const classes = useStyles();

  return (
    <div className={classes.user_info_wrap}>
      <div>
        <img
          src={`https://starforum.herokuapp.com/api/v1/users/${currentUser}/icon`}
          alt="user-avatar"
          width="200px"
          height="200px"
        />
      </div>
      <div className={classes.user_name_wrap}>{currentUser}</div>
      <div className={classes.reputation_wrap}>
        Reputation: <span className={classes.reputation_score}>{userReputation}</span>
      </div>
    </div>
  );
};

export default UserProfile;
