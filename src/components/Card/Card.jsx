import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
export const Card = (props) => {
  localStorage.setItem("ticketPrice",props.data[0].ticketPrice);
  localStorage.setItem("From",props.data[0].source);
  localStorage.setItem("To",props.data[0].destination);
  localStorage.setItem("Time",props.data[0].departureTime);
  localStorage.setItem("Date",props.data[0].date);
  const navigate = useNavigate();
  navigate("loader-true");
  function reset(){
    //removing disable functionality of proceed btn 
    document.querySelector("pro-btn").removeAttribute("disabled");
  }
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
          <li>{key.ticketPrice}.00 INR</li>
          <li>{key.busName}</li>
          <li>
          <Link to={"Seat"}><button onClick={()=>reset()}>View Seats</button></Link>
          </li>
        </div>
      ))}
    </section>
  );
};
