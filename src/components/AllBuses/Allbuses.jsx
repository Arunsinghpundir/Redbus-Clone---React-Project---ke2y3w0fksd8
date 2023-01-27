import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Seat from '../Seat/Seat';

const Allbuses = () => {
    const [buses, setBuses] = useState([]);
    const [isSeat, setSeat] = useState(false);
    const navigate = useNavigate();
    async function busData(data) {
      try {
        const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`;
        const api = await fetch(url);
        const response = await api.json(); 
        if (response[0].id) {
          setBuses(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    busData();
    function price(ticketPrice,source,destination,departureTime,date){
      if(source !== localStorage.getItem("From") && destination !== localStorage.getItem("To")){
        localStorage.clear();
      }
        localStorage.setItem("ticketPrice",ticketPrice);
        localStorage.setItem("From",source);
        localStorage.setItem("To",destination);
        localStorage.setItem("Time",departureTime);
        localStorage.setItem("Date",date);
    }
  return (
    <section className="card-box">
    <div className="card-head">
      <li>Source</li>
      <li>Destination</li>
      <li>Departure Time</li>
      <li>Arrival Time</li>
      <li>Ticket Price</li>
      <li>Bus Name</li>
      <li onClick={()=>navigate("/")}><button> Back Home</button></li>
    </div>
    {buses.map((key) => (
      <div className="card"> 
        <li>{key.source.toUpperCase()}</li>
        <li>{key.destination.toUpperCase()}</li>
        <li>{key.departureTime}</li>
        <li>{key.arrivalTime}</li>
        <li>{key.ticketPrice}.00 INR</li>
        <li>{key.busName}</li>
        <li>
        <Link to={"Seat"}><button onClick={()=>price(key.ticketPrice,key.source,key.destination,key.departureTime,key.date)} >View Seats</button></Link>
        </li>
      </div>
    ))}
  </section>
  )
}

export default Allbuses
