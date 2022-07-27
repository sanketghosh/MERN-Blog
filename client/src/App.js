import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import WriteBlog from "./pages/WriteBlog/WriteBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
export default function () {
  return (
    <>
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/blog">
              <Route path=":id" element={<SingleBlog />}></Route>
            </Route>
          </Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write-blog" element={<WriteBlog />} />
          <Route path="/user-settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
