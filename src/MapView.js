import React, { useEffect, useState } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapView = (props) => {
    const [currentLocation, setCurrentLocation] = useState({
        lat: 0,
        lng: 0
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        })
    }, []);

    return (
        <div className='map-view'>
            <Map google={props.google}  zoom={14} center={currentLocation}>
                <Marker name={'Current location'} position={currentLocation} />
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_API_KEY})(MapView);