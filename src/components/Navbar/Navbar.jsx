import "./Navbar.css";
import React from 'react';
import logo from "./logo.png";

const Navbar =  ()=>{
    return (
        <nav>
            <img src={logo} alt="logo" className="logo" />
            <h2 >REDBUS</h2>
            <div className="nav-list">
                <li>Help</li>
                <li>About</li>
                <li>Why RedBus</li>
            </div>
        </nav>
    )
    // style="background-image:url(https://st.redbus.in/seo/ind/HeroImageGuideline-V-2-new_1650873408.jpg);background-color:#b63e43"
}
export default Navbar