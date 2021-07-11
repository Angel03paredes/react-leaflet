import {Marker,Popup} from 'react-leaflet'

import { IconLocation } from "./IconLocation";


const Markers = (props)=>{
    const {places} = props;
    const arr = places.map((item,key)=>
    (
        <Marker position={item.geometry} key={key} icon={IconLocation}>
        <Popup>
            {item.name} <br /> {item.description}
        </Popup>
      </Marker>)) 
    return (
      arr
    )
}

export default Markers;
