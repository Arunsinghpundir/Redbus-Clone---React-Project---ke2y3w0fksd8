import "./Navbar.css";
import React from 'react';
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
const Navbar =  ()=>{
    const navigate = useNavigate();
    return (
        <nav>
            <img src={logo} onClick={()=> navigate('/')} alt="logo" className="logo" />
            <h2 onClick={()=> navigate('/')} >REDBUS</h2>
            <div className="nav-list">
                <li>Help</li>
                <li>About</li>
                <li>Why RedBus?</li>
            </div>
        </nav>
    )
}
export default Navbar