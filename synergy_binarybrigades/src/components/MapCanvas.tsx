import { useEffect, useState } from 'react';
import '../App.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

function MapCanvas(){


   
    const [startLat,setStartLat]=useState('');
    const [startLon,setStartlong]=useState('');
    const [endLat,setEndLat]=useState('');
    const [endLon,setEndLong]=useState('');
    

        function fetchAndDisplayMap() {
          
             
   
            fetch('http://127.0.0.1:5000/fetch_map', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startLat: startLat, startLon: startLon, endLat: endLat, endLon: endLon})
            })
            .then(response => response.json())
            .then(data => {
                         
    var map = L.map('map-container').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
                var coordinates = data.coordinates.map(coord => [coord[1], coord[0]]);
                var polyline = L.polyline(coordinates, {color: 'blue'}).addTo(map);//shortest route
                map.fitBounds(polyline.getBounds());
                console.warn(data.ev_coordinates);
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
            setTimeout(()=>{
                window.dispatchEvent(new Event("resize"));
            },500);
        }

        return(
            <>
            <div className='wmax hmax bg-gray-200'>
           
            <div  id='map-container' className='hmax wmax bg-red-200'></div>

        <div id="coordinates-form">
            <label >Start Latitude:</label>
            <input type="text" id="start-lat" name="start-lat" required onChange={(e)=>{setStartLat(e.target.value)}}></input><br></br>
            <label >Start Longitude:</label>
            <input type="text" id="start-lon" name="start-lon" required onChange={(e)=>{setStartlong(e.target.value)}}></input>
            <label >End Latitude:</label>
            <input type="text" id="end-lat" name="end-lat" onChange={(e)=>{setEndLat(e.target.value)}} required></input>
            <label> End Longitude:</label>
            <input type="text" id="end-lon" name="end-lon" required onChange={(e)=>{setEndLong(e.target.value)}}></input>
            <button type="submit" onClick={fetchAndDisplayMap}>Plot Route</button>
        </div>
            </div>
            <div  id='map-container'></div>

            </>
        )
        
   
}

export default MapCanvas