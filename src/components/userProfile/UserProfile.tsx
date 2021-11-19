import React, { useState } from "react";
import { useStyles } from "./UserProfileStyle";
import { getCookie } from "../../app/helpers/utils";
import API from "../../app/api/index";

const UserProfile = () => {
  const [userReputation, setUserReputation] = useState("");
  const [userNumberOfPosts, setUserNumberOfPosts] = useState("");

  const currentUser = getCookie("username");
  API.UserRequest.getUserByUsername(currentUser).then(response => {
    setUserReputation(response.reputation);
    return response.reputation;
  });

  API.UserRequest.getUserByUsername(currentUser).then(response => {
    setUserNumberOfPosts(response.numberOfPosts);
    return response.numberOfPosts;
  });

  const classes = useStyles();

  return (
    <div>
      <div className={classes.user_info_wrap}>
        <div>
          <img
            className={classes.user_avatar}
            src={`https://starforum.herokuapp.com/api/v1/users/${currentUser}/icon`}
            alt="user-avatar"
            width="200px"
            height="200px"
          />
        </div>
        <div className={classes.user_name_wrap}>{currentUser}</div>
        <div className={classes.user_posts_number}>
          <span> Number of posts:</span>
          <span className={classes.reputation_score}>{userNumberOfPosts}</span>
        </div>
        <div className={classes.reputation_wrap}>
          <span>Reputation:</span>
          <span className={classes.reputation_score}>{userReputation}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
