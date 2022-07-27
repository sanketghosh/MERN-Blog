import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post/Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Link to="blog/:id" style={{ textDecoration: "none", color: "inherit" }}>
        <Post />
      </Link>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
