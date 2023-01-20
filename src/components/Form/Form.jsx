import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
export const Form = (props)=> {
    const navigate = useNavigate();
    return(
        <section className="form">
            <header>
                <h1 className="animate__fadeOutUp">Bus Ticket Booking</h1>
            </header>
            <form method="post"  onSubmit={props.handle}>
               <input type="text" className="animate__backInUp" name="source" placeholder="From"  defaultValue={"chandigarh"}/>
               <input type="text"  name="destination" placeholder="To" defaultValue={"delhi"} />
               <input type="date"  name="date" />
               <button type="submit">Search</button>
            </form>
        </section>
    )
}