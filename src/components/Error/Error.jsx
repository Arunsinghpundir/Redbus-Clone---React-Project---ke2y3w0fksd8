import React from 'react'
import "./Error.css"
import 'animate.css';
import logo from "./logo.png";
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const nav = useNavigate();
  return (
    <div className='err'>
    <img src={logo} onClick={()=>nav("/")} id="logo2" className="animate__backInDown" alt="bus logo" />
      <h2 className='animate__heartBeat'>No Bus Found</h2>
      <h2 className='err-msg'>Please try again later...</h2>
    </div>
  )
}

export default Error
