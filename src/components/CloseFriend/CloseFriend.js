import "./CloseFriend.css";

import React from "react";

function CloseFriend({user}) {
  return (
    <li className="leftbarFriend">
      <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
