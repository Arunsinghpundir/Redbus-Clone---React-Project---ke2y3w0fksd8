import "./Navbar.css";
import React, { useState } from 'react';
import logo from "./logo.png";
import drop from "./drop-down-arrow.png";
import {  useNavigate } from "react-router-dom";
const Navbar =  (props)=>{  
const [isShow, setShow] = useState(false);

    function showDropDown (){
        if(!isShow && localStorage.getItem("TotalPrice")!==null){
        setShow(true);
        } else{
        setShow(false);
        }
    }

    function hideDrop(){
    setShow(false);
    navigate('/')
    }
    function disabledButton(){
        navigate('ticket/Seat')
        props.setDisabled(true)
    }

    const navigate = useNavigate();
    return (
        <nav >
            <img src={logo} onClick={()=>hideDrop() } alt="logo" className="logo" />
            {isShow?<></>:<div className="drop" onClick={()=>showDropDown()} >
                <h2 id="h2"  >REDBUS</h2>
                <img id="drop-down" src={drop} />
            </div>}
           {!isShow?<></>: <div className="nav-list">
                <li>Help</li>
                <li onClick={()=>disabledButton() } >Seat</li>
                <li onClick={()=> navigate('ticket/Seat/View')}>Ticket</li>
            </div>}
        </nav>
    )
}
export default Navbar