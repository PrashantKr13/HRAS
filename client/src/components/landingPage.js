import React from "react";
import "./stylesheets/landingPagestyle.css";
import GroupImage from "../assets/group.webp";
import IndividualImage from "../assets/indi.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const navigateToRoom = () => {
    navigate("/room");
  };

  return (
    <>
      <div className="landingPage">
        <div className="roomWithFriends">
          <img src={GroupImage} onClick={navigateToRoom} />
          <p>Room with Friends</p>
        </div>
        <div className="individualRoom">
          <img src={IndividualImage} onClick={navigateToRoom} />
          <p>Individual Room</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
