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
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function busData() {
      navigate("loader-true");
      console.log(formData, "mainObj");
      try {
        const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${formData.source}&destination=${formData.destination}&date=${formData.date}`;
        const api = await fetch(url);
        const response = await api.json(); // [{},{},{},{}]
        if (response[0].id) {
          setTable(response);
          setDisabled(false);
          navigate("ticket");
          if (
            formData.source !== localStorage.getItem("From") &&
            formData.destination !== localStorage.getItem("To")
          )
            localStorage.setItem("SeatArr", JSON.stringify([]));
        }
      } catch (err) {
        console.log(err);
        setDisabled(false);
        navigate("err");
      }
    }
    busData();
  }, [formData]);

  //handling form data
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // busData(formJson);
    setFormData(formJson);
  }

  return (
    <div id="main">
      <Navbar setDisabled={setDisabled} />
      <Routes>
        <Route path="loader-true" element={<Loader visibile={true} />} />
        <Route exact path="/" element={<Form handle={handleSubmit} />} />
        <Route exact path={"ticket"} element={<Card data={table} />} />
        <Route
          exact
          path={"ticket/Seat"}
          element={<Seat isDisabled={isDisable} setDisabled={setDisabled} />}
        />
        ;
        <Route exact path="ticket/Seat/View" element={<View />} />
        <Route exact path="err" element={<Error />} />
        <Route exact path="err/allbus" element={<Allbuses />} />
        <Route
          exact
          path={"err/allbus/Seat"}
          element={<Seat isDisabled={isDisable} setDisabled={setDisabled} />}
        />
        ;
        <Route exact path="err/allbus/Seat/View" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
