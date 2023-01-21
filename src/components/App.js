import React, { useState, useEffect } from "react";
import "animate.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/App.css";
import { Card } from "./Card/Card";
import Error from "./Error/Error";
import { Form } from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Seat from "./Seat/Seat";
import { View } from "./View Seats/View";
import Loader from "./Loader/Loader";
const App = () => {
  const [table, setTable] = useState([]);
  const navigate = useNavigate();
  async function busData(data) {
    navigate("loader-true");
    try {
      const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${data.source}&destination=${data.destination}&date=${data.date}`;
      const api = await fetch(url);
      const response = await api.json();
      if (response[0].id) {
        setTable(response);
        navigate("ticket");
      }
    } catch (err) {
      console.log(err);
      navigate("err");
    }
  }

  //handling form data
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log("1", formData);
    const formJson = Object.fromEntries(formData.entries());
    busData(formJson);
  }
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="loader-true" element={<Loader visibile={true} />} />
        <Route exact path="/" element={<Form handle={handleSubmit} />} />
        <Route path={"ticket"} element={<Card data={table} />} />
        <Route path={"ticket/Seat"} element={<Seat />} />;
        <Route path="ticket/Seat/View" element={<View />} />
        <Route path="err" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
