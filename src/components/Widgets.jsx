import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Avatar from "@material-ui/core/Avatar";
import "../styles/widget.css";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="search-io">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widget-card">
        <h3>What's happening</h3>
        <div className="wh-card">
          <span>Cricket . LIVE</span>
          <p>ENGvIND: England win by an innings and 76 runs</p>
          <span>
            Trending with <small>Ashwin</small> , <small>jadega</small>
          </span>
        </div>

        <div className="wh-card">
          <span>Cricket . LIVE</span>
          <p>ENGvIND: England win by an innings and 76 runs</p>
          <span>
            Trending with <small>Ashwin</small> , <small>jadega</small>
          </span>
        </div>
      </div>

      <div className="widget-card">
        <h3>Who to follow</h3>
        <WidgetFollowProfile
          name="Alibaba Cloud"
          username="@alibaba_cloud"
          isVerified={true}
        />
        <WidgetFollowProfile
          name="HYPEX"
          username="@HYPEX"
          isVerified={false}
        />
      </div>
    </div>
  );
}

function WidgetFollowProfile({ img, name, username, follow_src, isVerified }) {
  return (
    <div className="w-follow-card">
      <Avatar alt={name} src="" />
      <div className="profile-data">
        <p>
          {name} {isVerified && <VerifiedUserIcon />}
        </p>
        <span>{username}</span>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
}
