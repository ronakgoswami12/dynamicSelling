import axios from "axios";
import './App.css';
import React from 'react';
import FormValidation from "../src/FormValidation"

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL ?? " http://localhost:3000/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <FormValidation />
    </div>
  );
} 


export default App;
