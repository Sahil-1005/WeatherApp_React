// GoogleMap.js
import React,{useEffect,useState} from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const libraries = ['places']; // Enable Places library for search functionality

const mapContainerStyle = {
    width: '250px',
    height: '180px',
};

function Maps({ mapData }) {
    const [map, setMap] = React.useState(null);
   
    const onLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    // Handle potential missing lat or lng values (optional)
    const defaultCenter = {
        lat: 0, // Default latitude if mapData.lat is missing
        lng: 0, // Default longitude if mapData.lng is missing
    };
    const center = mapData ? mapData : defaultCenter; // Use mapData if available, otherwise use defaults

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBIoZ-HOZnFLJPl8KmfHHnjc8zpCnZRtYA"
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onLoad={onLoad}
            >
                {map && (
                    <Marker key="1"
                        position={mapData}
                        draggable={true}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default Maps;
