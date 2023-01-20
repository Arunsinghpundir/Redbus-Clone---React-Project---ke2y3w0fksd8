import React from "react";
import "./View.css"
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
export const View = ()=>{
const nav = useNavigate();
const from = localStorage.getItem("From").toUpperCase();
const to = localStorage.getItem("To").toLowerCase();
const time = localStorage.getItem("Time");
const seat = localStorage.getItem("seatNum");
    return (
       <section className="Details">
        <Loader visible={true}/>
        <h2>Total Number of seats: {seat}</h2>
        <h2 className="animate__backInUp">Total Tickets Price: {localStorage.getItem("TotalPrice")}.00 INR</h2>
        <div className="h2-card">
            <h3>{from} &rarr; {to}</h3>
            <h3>Bus will depart at {time}.</h3>
        </div>
        <h2>Thank You for choosing Red Bus.</h2>
        <h4>Your Tickets will be generated within 2 hours.</h4>
        <button onClick={()=>nav("/")}>Back to home</button>
       </section>
    )
}