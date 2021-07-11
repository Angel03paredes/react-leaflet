import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
   const [state,setState] = useState({
       longitude:0,
       latitude:0
   });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          setState({latitude : position.coords.latitude,longitude : position.coords.longitude})
          
      },
      (error) => {console.log(error);},
      {enableHighAccuracy:true}
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
          <h2>Latitude : {state.latitude}</h2>
          <h2>Longitude : {state.longitude}</h2>
          <Link to={{pathname:"/map",state}}>See my location</Link>
      </div>
    </div>
  );
};

export default Home;
