import { useEffect, useState } from 'react';
import '../App.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

function MapCanvas(){

    return(
        <>
        <div className='wmax hmax bg-gray-200'>
        <div id="map-container"></div>
    <form id="coordinates-form" onSubmit={fetchAndDisplayMap}>
        <label >Start Latitude:</label>
        <input type="text" id="start-lat" name="start-lat" required onChange={(e)=>{setStartLat(e.target.value)}}><br></br></input>
        <label >Start Longitude:</label>
        <input type="text" id="start-lon" name="start-lon" required onChange={(e)=>{setStartlong(e.target.value)}}><br></br></input>
        <label >End Latitude:</label>
        <input type="text" id="end-lat" name="end-lat" onChange={(e)=>{setEndLat(e.target.value)}} required><br></br></input>
        <label> End Longitude:</label>
        <input type="text" id="end-lon" name="end-lon" required onChange={(e)=>{setEndLong(e.target.value)}}><br></br></input>
        <button type="submit">Plot Route</button>
    </form>
    <div className='map-container'></div>
        </div>
        </>
    )
    
    useEffect(()=>{
        fetchAndDisplayMap();
    },[])
    const [startLat,setStartLat]=useState('');
    const [startLon,setStartlong]=useState('');
    const [endLat,setEndLat]=useState('');
    const [endLon,setEndLong]=useState('');

    var map = L.map('map-container').setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        function fetchAndDisplayMap() {
           

            fetch('/fetch_map', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startLat: startLat, startLon: startLon, endLat: endLat, endLon: endLon })
            })
            .then(response => response.json())
            .then(data => {
                var coordinates = data.coordinates.map(coord => [coord[1], coord[0]]);
                var polyline = L.polyline(coordinates, {color: 'blue'}).addTo(map);//shortest route
                map.fitBounds(polyline.getBounds());

                var evIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<i class="fas fa-bolt fa-2x"></i>', 
    iconSize: [22, 22], 
    iconAnchor: [11, 11], 
    popupAnchor: [0, -11]
});

                //markers for EV
                data.ev_coordinates.forEach(evCoord => {
                    L.marker(evCoord, {icon: evIcon}).addTo(map);
                });
            })
            .catch(error => console.error('Error fetching map:', error));
        }
   
}

export default MapCanvas