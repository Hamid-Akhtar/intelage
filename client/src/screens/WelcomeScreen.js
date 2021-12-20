import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="welcomeScreen">
      <h1>Welcome</h1>
      <Link to="/form">click here to get started</Link>
    </div>
  );
};

export default WelcomeScreen;
