import React from "react";
import "./Header.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <span className="logo">JaseelSocial</span>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend,post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerLinks">
          <span className="headerLink">Homepage</span>
          <span className="headerLink">Timeline</span>
        </div>
        <div className="headerIcons">
          <div className="headerIconItem">
            <Person />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <Chat />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <Notifications />
            <span className="headerIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="headerImg" />
      </div>
    </div>
  );
}

export default Header;
