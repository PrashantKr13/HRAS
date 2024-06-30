import React, { useEffect, useState } from "react";
import "./stylesheets/RoomAllotmentPage.css"
import {useNavigate} from "react-router-dom"
// import NavBar from "./components/Navbar";
const RoomTypeOptions = () => {
  const roomTypes = [
    "4 Bedded AC",
    "4 Bedded NON AC",
    "3 Bedded AC",
    "3 Bedded NON AC",
    "2 Bedded AC",
    "2 Bedded NON AC",
  ];
  const navigate = useNavigate();
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/roomType/${selectedRoomType}`);
  }
  return (
    <div className="RoomAllotmentContainer">
      <h3>Room Type:</h3>
      <form className="roomTypes" onSubmit={handleSubmit}>
  {roomTypes.map((type, index) => (
    <label key={index}>
      <input
        type="radio"
        name="roomType"
        value={type}
        onChange={() => setSelectedRoomType(type)}
      />
      <span>{type}</span>
    </label>
  ))}
  <button
    type="submit"
    className="submitButton"
  >
    Submit
  </button>
  
</form>
    </div>
  );
};

const RoomAllotmentPage = () => {
  const [selectedRoomType, setSelectedRoomType] = useState("");

  const handleRoomTypeSelection = (roomType) => {
    setSelectedRoomType(roomType);
    // You can perform additional logic based on the selected room type
  };

  return (
    <div>
      <RoomTypeOptions onSelectRoomType={handleRoomTypeSelection} />
      {selectedRoomType && (
        <div style={{ margin: "20px" }}>
          <h3>Selected Room Type: {selectedRoomType}</h3>
        </div>
      )}
    </div>
  );
};

export default RoomAllotmentPage;
