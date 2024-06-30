import React from "react";
import "./stylesheets/navbar.css";

function NavBar() {
  // Retrieve email from localStorage

  return (
    <div className="navbar">
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h2 className="head">Hostel Room Allotment System</h2>

      {/* Display user email if available in localStorage */}
    </div>
  );
}

export default NavBar;
