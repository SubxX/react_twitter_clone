import React from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}
