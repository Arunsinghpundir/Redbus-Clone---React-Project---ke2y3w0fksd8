import React from 'react'
import '../styles/App.css';
import { Form } from './Form/Form';
import Navbar from './Navbar/Navbar';

async function busData(data){
  const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${data.source}&destination=${data.destination}`
  const api = await fetch(url);
  const response = await api.json();
  console.log(response)
  return response;
}
 function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);
  
  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
  busData(formJson);
}
const App = () => {
  return (
    <div id="main">
      <Navbar/>
      <Form handle={handleSubmit}/>
    </div>
  )
}


export default App;
