import L from "leaflet";
import marker from '../assets/marker.png'

export const IconLocation =  L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

