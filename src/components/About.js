import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div>
      <h2>About</h2>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About; // ✅ this is important
