import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import "./seat.css";

const Seat = (props) => {
    const navigate = useNavigate();
    const [ticketPrice, setTicketPrice] = useState(localStorage.getItem("ticketPrice"));
    let seatArr = JSON.parse(localStorage.getItem("SeatArr")) || [];
    const handleClick = (e)=>{
        if(!seatArr.includes(e.target.id) ){
          //checking is proceed button is disabled or not
          if(!props.isDisabled){
            seatArr.push(e.target.id);
            document.getElementById(e.target.id).style.backgroundColor = "blue";
          }else{
            document.getElementById(e.target.id).style.cursor = "not-allowed";
          }
        } else {
          if(!props.isDisabled){
          const index = seatArr.indexOf(e.target.id);
          seatArr.splice(index, 1);
          document.getElementById(e.target.id).style.backgroundColor = "var(--bg-color--)";
          }
          else{
            document.getElementById(e.target.id).style.cursor = "not-allowed";
          }
        }
        console.log(seatArr);
        localStorage.setItem("SeatArr", JSON.stringify(seatArr))
    }
     function calculate(){
        if(seatArr.length !== 0){
          let cal = seatArr.length * ticketPrice;
          localStorage.setItem("TotalPrice", cal )
          setTicketPrice(cal); 
          localStorage.setItem("seatNum", seatArr.length);
          navigate("View");
        }else{
          document.querySelector(".msg").style.display = "Block";
          setTimeout(() => {
              document.querySelector(".msg").style.display = "none";
          }, 2000);
        }
    }
    useEffect(()=>{
      let bookedArr =  JSON.parse(localStorage.getItem("SeatArr"));
      if(bookedArr){
       bookedArr.map((id)=>{
          document.getElementById(id).style.cursor = "not-allowed";
           document.getElementById(id).style.backgroundColor = "Yellow";
         })
        }
    },[seatArr])

   
    
  return (
    <div className="box">
         <h2 >Tickets Price: {localStorage.getItem("ticketPrice")}.00 INR/seat</h2>
         <div className="msg animate__shakeX">Plese Select a seat !!</div>
         
      <div className="ticket-box">
        <div id="imp-note">
        {!props.isDisabled?<></>:<><div>You can not modify seats from this section</div> <hr /></>}
       
          <span id="prebooked">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp; Booked
             <hr />
          <span id="available">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;Available for Booking
        </div>
        <table className="table">
        <thead>
          <tr id="head-row">
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <br></br>
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
            <br/>
            <td id="A4" onClick={handleClick}></td>
            <td id="A5" onClick={handleClick}></td>
          </tr>
          <tr>
            <td>B</td>
            <td id="B1" onClick={handleClick}></td>
            <td id="B2" onClick={handleClick}></td>
            <td id="B3" onClick={handleClick}></td>
            <br/>
            <td id="B4" onClick={handleClick}></td>
            <td id="B5" onClick={handleClick}></td>
          </tr>
          <tr>
            <td>C</td>
            <td id="C1" onClick={handleClick}></td>
            <td id="C2" onClick={handleClick}></td>
            <td id="C3" onClick={handleClick}></td>
            <br/>
            <td id="C4" onClick={handleClick}></td>
            <td id="C5" onClick={handleClick}></td>
          </tr>
          <tr>
            <td>D</td>
            <td id="D1" onClick={handleClick}></td>
            <td id="D2" onClick={handleClick}></td>
            <td id="D3" onClick={handleClick}></td>
            <br/>
            <td id="D4" onClick={handleClick}></td>
            <td id="D5" onClick={handleClick}></td>
          </tr>
        </tbody>
        
      </table>
      <button onClick={calculate} disabled={props.isDisabled}  id="pro-btn">Proceed &rarr; </button>
      </div>
   
  
    </div>
  );
};

export default Seat;
