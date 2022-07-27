import React from "react";
import "./SingleBlog.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

export default function SingleBlog() {
  return (
    <div className="single-blog">
      <SinglePost />

      <Sidebar />
    </div>
  );
}
