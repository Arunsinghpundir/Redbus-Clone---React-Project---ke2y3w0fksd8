import React from "react";
import "./Form.css";
export const Form = (props)=> {
    return(
        <section className="form">
            <header>
                <h1>Bus Ticket Booking</h1>
            </header>
            <form method="post"  onSubmit={props.handle}>
               <input type="text"  name="source" placeholder="From"  />
               <input type="text"  name="destination" placeholder="To" />
               <input type="date"  name="date" />
               <button type="submit">Search</button>
            </form>
        </section>
    )
}