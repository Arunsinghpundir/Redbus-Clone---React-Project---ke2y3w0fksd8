import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
export const Card = (props) => {
  localStorage.setItem("ticketPrice",props.data[0].ticketPrice);
  console.log(props.data[0].ticketPrice);
  const navigate = useNavigate();
  return (
    <section className="card-box">
      <div className="card-head">
        <li>Departure Time</li>
        <li>Arrival Time</li>
        <li>Ticket Price</li>
        <li>Bus Name</li>
        <li onClick={()=>navigate("/")}><button> Back Home</button></li>
      </div>
      {props.data.map((key) => (
        <div className="card">
          <li>{key.departureTime}</li>
          <li>{key.arrivalTime}</li>
          <li>{key.ticketPrice}</li>
          <li>{key.busName}</li>
          <li>
          <button onClick={()=>navigate("Seat")}>View Seats</button>
          </li>
        </div>
      ))}
     
    </section>
  );
};
