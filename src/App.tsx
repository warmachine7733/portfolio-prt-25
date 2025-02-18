import React from "react";
import "./App.css";
import { About, Blogs, Contact, Intro, Projects, Resume } from "./components";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">sidebar</div>
      <div className="main">
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Blogs />
        <Contact />
      </div>
    </div>
  );
};

export default App;
