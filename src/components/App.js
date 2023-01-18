import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/App.css";
import { Card } from "./Card/Card";
import { Form } from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Seat from "./Seat/Seat";
import { View } from "./View Seats/View";

const App = () => {
  const [table, setTable] = useState([]);
  const navigate = useNavigate();
  async function busData(data) {
    var MyDate = data.date;
    var formattedDate = new Date(MyDate);
    var d = formattedDate.getDate();
    var m = formattedDate.getMonth();
    m += 1;
    var y = formattedDate.getFullYear();
    const date = y + "-0" + m + "-" + d;

    console.log(data);
    const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${data.source}&destination=${data.destination}&date=${date}`;
    const api = await fetch(url);
    const response = await api.json();
    setTable(response);
    navigate("ticket");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    busData(formJson);
  }
  const data = "mcsdain";
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form handle={handleSubmit} />} />
        <Route path="ticket" element={<Card data={table} />} />
        <Route path="ticket/Seat" element={<Seat />} />
        <Route path="ticket/Seat/View" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
