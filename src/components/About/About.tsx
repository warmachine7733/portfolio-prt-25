import React from "react";
import AboutText from "./AboutText";
import PersonalDetails from "./PersonalDetails";
import "./index.css";

const About = (): React.ReactElement => {
  return (
    <div className="about">
      <h1>About</h1>
      <AboutText/>
      <PersonalDetails/>
    </div>
  );
};

export default About;
