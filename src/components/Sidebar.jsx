import React, { useState } from "react";
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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Dialog from "@material-ui/core/Dialog";

// Firebase stuff
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userActions";

function Sidebar() {
  const dispatcher = useDispatch();
  const history = useHistory();
  const [dialog, setDialog] = useState(false);

  function closeDialog() {
    setDialog(false);
  }

  function logout() {
    history.push("/login");
    localStorage.removeItem("tuser");
    dispatcher(
      setUser({
        uid: "",
        name: "",
        phone: "",
        email: "",
        username: "",
        profile_picture: "",
      })
    );
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="twitter__logo" />
      <SidebarOption text="Home" Icon={HomeIcon} active={true} />
      <SidebarOption text="Explore" Icon={SearchIcon} active={false} />
      <SidebarOption
        text="Notifications"
        Icon={NotificationsIcon}
        active={false}
      />
      <SidebarOption text="Messages" Icon={ForumIcon} active={false} />
      <SidebarOption text="Bookmarsks" Icon={BookmarkIcon} active={false} />
      <SidebarOption text="Lists" Icon={SubjectIcon} active={false} />
      <SidebarOption text="Profile" Icon={PersonIcon} active={false} />
      <SidebarOption text="More" Icon={MoreHorizIcon} active={false} />
      <SidebarOption
        text="Logout"
        Icon={ExitToAppIcon}
        active={false}
        clickHandler={() => {
          setDialog(true);
        }}
      />
      <button className="primary-btn sidebar__tweet">
        <AddCircleIcon />
        <p>Tweet</p>
      </button>

      <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="logout confirmation dialog"
      >
        <div className="custom-dialog">
          <p>Are you sure ?</p>
          <span>Are your sure you want to logout for twitter</span>
          <div className="dialog-actions">
            <button className="cancel-btn" onClick={closeDialog}>
              Cancel
            </button>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Sidebar;

function SidebarOption({ text, Icon, active, clickHandler }) {
  return (
    <div
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={() => clickHandler()}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
}
