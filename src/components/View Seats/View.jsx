import React from "react";
import { useNavigate } from "react-router-dom";
export const View = ()=>{
const nav = useNavigate();

    return (
       <section className="Details">
        <h2>Total Tickets Price: {localStorage.getItem("TotalPrice")}.00 INR</h2>
        <h2>Thank You for choosing Red Bus.</h2>
        <h4>Your Tickets will be generated within 2 hours.</h4>
        <button onClick={()=>nav("/")}>Back to home</button>
       </section>
    )
}