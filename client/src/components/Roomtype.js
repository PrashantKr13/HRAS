import React, { useState, useEffect } from "react"
import styles from "./stylesheets/Roomtype.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import { roomDataRoute } from "../utils/ApiRoutes";

const RoomType = () => {
  const { data } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  let NoOfBed = parseInt(data.charAt(0));
  const TotalBed = NoOfBed;
  let EmptyBeds = [];
  while (NoOfBed!==1) {
    EmptyBeds.push(NoOfBed--);
  }
  useEffect(() => {
    (async () => {
      const roomData = await axios.get(`${roomDataRoute}/${data}`);
      setRoomDetails(roomData.data);
    })()
  }, []);

  const handleSubmit = () => {

  }
  return (
    <div className="RoomTypeContainer">
      <h3>{data}</h3>
      <form className="roomTypes" onSubmit={handleSubmit}>
        {
          EmptyBeds.map((emptyBed, index) => {
            return (
              <label key={index}>
                <div>
                <span className="NoOfEmptyBedsSpan">{roomDetails?roomDetails.filter((item)=>item["Empty Beds"]===emptyBed).length:""}</span>
                <input
                  type="radio"
                  name="emptyBedRemaining"
                  value={emptyBed}>
                </input>
                </div>
                <span>{`${emptyBed} out of ${TotalBed} are empty`}</span>
              </label>
            )
          })
        }
        <button
          type="submit"
          className="submitButton"
        >
          Submit
        </button>
      </form>
    </div>
  )
};

export default RoomType;
