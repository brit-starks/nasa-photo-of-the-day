import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

import Header from './components/Header';
import Photo from './components/Photo';
import Description from "./components/Description";

function App() {
  // const [nasaData, setNasaData] = useState([]);
  const [nasaDate, setNasaDate] = useState();
  const [nasaImage, setNasaImage] = useState();
  const [nasaTitle, setNasaTitle] = useState();
  const [nasaInfo, setNasaInfo] = useState();

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    // axios.get("https://dog.ceo/api/breed/hound/images/random/25")
    .then(res => {
      console.log(res)
      setNasaImage(res.data.url)
      setNasaDate(res.data.date)
      setNasaTitle(res.data.title)
      setNasaInfo(res.data.explanation)
    })
    .catch((error) => {console.error(error)}
    )}, 
    []);


  return (

    
    <div className="App">
      <Header />
      <h2>Photo Of The Day</h2>
      <Photo img={nasaImage} title={nasaTitle} />
      <Description date={nasaDate} info={nasaInfo} />
    </div>
  );
}
    

export default App;
