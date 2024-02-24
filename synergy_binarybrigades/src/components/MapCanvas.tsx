import { useEffect, useState } from 'react';
import '../App.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

function MapCanvas(){


   
    const [startAddress,setStartAddress]=useState('');
  
    const [endAddress,setendAddress]=useState('');
    

        function fetchAndDisplayMap() {
          
             
   
            fetch('http://127.0.0.1:5000/fetch_map', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startAddress: startAddress, endAddress: endAddress })
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
            <label >Start Address</label>
            <input type="text" id="startAddress" name="startAddress" required onChange={(e)=>{setStartAddress(e.target.value)}}></input><br></br>
           
            <label> End Address:</label>
            <input type="text" id="endAddress" name="endAddress" required onChange={(e)=>{setendAddress(e.target.value)}}></input>
            <button type="submit" onClick={fetchAndDisplayMap}>Plot Route</button>
        </div>
            </div>
            <div  id='map-container'></div>

            </>
        )
        
   
}

export default MapCanvas