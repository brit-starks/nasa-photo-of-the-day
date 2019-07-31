import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res =>
      console.log(res.data),
      setNasaData(res.data.date);
      setNasaData(res.data.explanation)
    )}, 
    []);


  return (
    <div className="App">
      
    </div>
  );
}
    

export default App;
