import axios from "axios";
import "./App.css";
import React from "react";
import Productinfovalidation from "../src/Productinfovalidation";
import Techinfovalidation from "./Techinfovalidation";
import Generalinfovalidation from "./Generalinfovalidation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_URL ?? " http://localhost:3000/";
axios.defaults.withCredentials = true;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
    addData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addData = async (newData) => {
    try {
      await axios.put("/api/data", newData);
      // Assuming the request is successful, you can optionally refetch the data
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Productinfovalidation />} />
            <Route path="/general" element={<Generalinfovalidation />} />
            <Route path="/tech" element={<Techinfovalidation />} />
          </Routes>
        </div>
      </Router>
    );
  };
}

export default App;
