import axios from "axios";
import './App.css';
import React from 'react';
import Productinfovalidation from "../src/Productinfovalidation"
import Techinfovalidation from "./Techinfovalidation"
import Generalinfovalidation from "./Generalinfovalidation"

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL ?? " http://localhost:3000/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <Productinfovalidation />
     <Generalinfovalidation />
     <Techinfovalidation />
    </div>
  );
} 


export default App;
