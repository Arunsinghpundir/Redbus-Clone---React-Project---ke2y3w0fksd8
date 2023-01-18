import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import "./seat.css";

const Seat = () => {
    const navigate = useNavigate();
    const [ticketPrice, setTicketPrice] = useState(localStorage.getItem("ticketPrice"));
   
    let seatArr = [];
    const handleClick = (e)=>{
     
        if(!seatArr.includes(e.target.id)){
            seatArr.push(e.target.id);
            document.getElementById(e.target.id).style.backgroundColor = "red";
        }else{
            seatArr.pop(e.target.id);
            document.getElementById(e.target.id).style.backgroundColor = "var(--bg-color--)";
            console.log( e.target.id)
        }
        console.log(seatArr);
    }
     function calculate(){
        setTicketPrice(seatArr.length * ticketPrice);
        if(seatArr.length===0){
            document.querySelector(".msg").style.display = "Block";
            setTimeout(() => {
                document.querySelector(".msg").style.display = "none";
            }, 2000);
        }else{
            setTimeout(() => {
                navigate("View")
            }, 1);
        }
    }
        localStorage.setItem("TotalPrice" , ticketPrice );
  return (
    <div className="box">
         <h2>Tickets Price: {localStorage.getItem("TotalPrice")}.00 INR/seat</h2>
    <table className="table">
      <thead>
        <tr>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td></td>
          <td>4</td>
          <td>5</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td id="A1" onClick={handleClick}></td>
          <td id="A2" onClick={handleClick}></td>
          <td id="A3" onClick={handleClick}></td>
          <td ></td>
          <td id="A4" onClick={handleClick}></td>
          <td id="A5" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>B</td>
          <td id="B1" onClick={handleClick}></td>
          <td id="B2" onClick={handleClick}></td>
          <td id="B3" onClick={handleClick}></td>
          <td ></td>
          <td id="B4" onClick={handleClick}></td>
          <td id="B5" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>C</td>
          <td id="C1" onClick={handleClick}></td>
          <td id="C2" onClick={handleClick}></td>
          <td id="C3" onClick={handleClick}></td>
          <td ></td>
          <td id="C4" onClick={handleClick}></td>
          <td id="C5" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>D</td>
          <td id="D1" onClick={handleClick}></td>
          <td id="D2" onClick={handleClick}></td>
          <td id="D3" onClick={handleClick}></td>
          <td ></td>
          <td id="D4" onClick={handleClick}></td>
          <td id="D5" onClick={handleClick}></td>
        </tr>
      </tbody>
    </table>
    <button onClick={calculate}>Proceed</button>
    <div className="msg"></div>
    </div>
  );
};

export default Seat;
