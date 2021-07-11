import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from './Markers';
import {places} from './../assets/data.json'
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const MapView = () => {
 const {state} =  useLocation()
 console.log(state);
  return (
    <>
    <Navbar/>
    <MapContainer center={[state.latitude,state.longitude]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers places={places}></Markers>
    </MapContainer>
    </>
  );
};

export default MapView;
