import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  return (
    
    <div className="App">

    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
      
      axios.get("https://dog.ceo/api/breed/hound/images/random/25")
      .then(res => {
        console.log(res)}
      )}, []);

      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role=img>🚀</span>! */}
      </p>
    </div>
  );
}

export default App;
