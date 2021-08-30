import React from "react";
import "../styles/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SubjectIcon from "@material-ui/icons/Subject";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ForumIcon from "@material-ui/icons/Forum";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter__logo" />
      <SidebarOption text="Home" Icon={HomeIcon} active={false} />
      <SidebarOption text="Explore" Icon={SearchIcon} active={false} />
      <SidebarOption
        text="Notifications"
        Icon={NotificationsIcon}
        active={true}
      />
      <SidebarOption text="Messages" Icon={ForumIcon} active={false} />
      <SidebarOption text="Bookmarsks" Icon={BookmarkIcon} active={false} />
      <SidebarOption text="Lists" Icon={SubjectIcon} active={false} />
      <SidebarOption text="Profile" Icon={PersonIcon} active={false} />
      <SidebarOption text="More" Icon={MoreHorizIcon} active={false} />
      <button className="primary-btn sidebar__tweet">
        <AddCircleIcon />
        <p>Tweet</p>
      </button>
    </div>
  );
}

export default Sidebar;

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <p>{text}</p>
    </div>
  );
}
