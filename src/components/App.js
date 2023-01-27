import React, { useState } from "react";
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
import Allbuses from "./AllBuses/Allbuses";
const App = () => {
  const [table, setTable] = useState([]);
  const [isDisable, setDisabled] = useState(false);
  const navigate = useNavigate();
  async function busData(data) {
    navigate("loader-true");
    try {
      const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${data.source}&destination=${data.destination}&date=${data.date}`;
      const api = await fetch(url);
      const response = await api.json(); // [{},{},{},{}]
      if (response[0].id) {
        setTable(response);
        setDisabled(false);
        navigate("ticket");
        if (
          data.source !== localStorage.getItem("From") &&
          data.destination !== localStorage.getItem("To")
        )
          localStorage.setItem("SeatArr", JSON.stringify([]));
      }
    } catch (err) {
      console.log(err);
      setDisabled(false);
      navigate("err");
    }
  }

  //handling form data
  function handleSubmit(e) {
    e.preventDefault(); // prevent form default value
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    busData(formJson);
  }
  return (
    <div id="main">
      <Navbar setDisabled={setDisabled} />
      <Routes>
        <Route path="loader-true" element={<Loader visibile={true} />} />
        <Route exact path="/" element={<Form handle={handleSubmit} />} />
        <Route path={"ticket"} element={<Card data={table} />} />
        <Route path={"ticket/Seat"} element={<Seat isDisabled={isDisable} />} />
        ;
        <Route path="ticket/Seat/View" element={<View />} />
        <Route path="err" element={<Error />} />
        <Route path="err/allbus" element={<Allbuses />} />
        <Route
          path={"err/allbus/Seat"}
          element={<Seat isDisabled={isDisable} />}
        />
        ;
        <Route path="err/allbus/Seat/View" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
