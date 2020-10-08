import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

function Map(props) {
    // console.log("these are the props",props);
    
        return (
            <>
                <GoogleMap 
                    defaultZoom={16} 
                    defaultCenter={{ lat: Number(props.latitude), lng: Number(props.longitude) }} 
                />
                <Marker position={{ lat: Number(props.latitude), lng: Number(props.longitude) }} />
            </>
        )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
// map wont take my process.env variable to hide API key
export default function MapContainer(props) {
    // console.log("other props",props);
    
    return (
        <div style={{width:'80%'}}>
   { console.log("this is the key",process.env.REACT_APP_GOOGLE_KEY)}
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                    process.env.REACT_APP_GOOGLE_KEY
                }&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "300px"}} />}
                containerElement={<div style={{ height: "300px"}} />}
                mapElement={<div style={{ height: "300px"}} />}
                latitude={props.latitude}
                longitude={props.longitude}
            />
        </div>
    )
}