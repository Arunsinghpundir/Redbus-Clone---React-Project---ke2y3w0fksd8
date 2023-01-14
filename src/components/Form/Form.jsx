import React from "react";
import "./Form.css";
export const Form = ()=> {
    return(
        <section className="form">
            <header>
                <h1>Bus Ticket Booking</h1>
            </header>
            <form>
               <input type="text" placeholder="From" />
               <input type="text" placeholder="To" />
               <input type="date"/>
               <button type="button" >Search</button>
            </form>
        </section>
    )
}