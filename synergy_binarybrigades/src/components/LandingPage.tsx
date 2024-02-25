import Footer from "@/smallcomponents/Footer";
import "../App.css";
import Sidebar from "@/smallcomponents/Sidebar";
import { SiYourtraveldottv } from "react-icons/si";
import carimage from "@/assets/car.png";
import demomap from "@/assets/map1.png";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet"; // Import Leaflet library
import { useState } from "react";
function LandingPage() {
  const [startAddress, setStartAddress] = useState("");
  const [bool, setBool] = useState(false);
  const [number1,setNumber1]=useState(0);
  const [endAddress, setendAddress] = useState("");
  const [batteryPercentage, setbatteryPercentage] = useState("");
const[ans,setAns]=useState(250);



  function fetchAndDisplayMap() {
    setbatteryPercentage(number1)
    console.log((batteryPercentage/250)*100)
    fetch("http://127.0.0.1:5000/fetch_map", {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startAddress: startAddress,
        endAddress: endAddress,
        batteryPercentage: batteryPercentage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        var map = L.map("map-container").setView([0, 0], 2);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        // var coordinates = data.coordinates.map((coord) => [coord[1], coord[0]]);
        // var polyline = L.polyline(coordinates, { color: "blue" }).addTo(map); //shortest route
        // map.fitBounds(polyline.getBounds());
        // console.warn(data.ev_coordinates);
        // var evIcon = L.divIcon({
        //   className: "custom-div-icon",
        //   html: '<i class="fas fa-bolt fa-2x"></i>',
        //   iconSize: [22, 22],
        //   iconAnchor: [11, 11],
        //   popupAnchor: [0, -11],
        // });

        // //markers for EV
        // data.ev_coordinates.forEach((evCoord) => {
        //   L.marker(evCoord, { icon: evIcon }).addTo(map);
        // });

        var startIcon = L.divIcon({
          className: "custom-div-icon",
          html: '<i class="fas fa-map-pin fa-2x" style="color: blue;"></i>',
          iconSize: [22, 22],
          iconAnchor: [11, 22],
          popupAnchor: [0, -11],
        });

        var endIcon = L.divIcon({
          className: "custom-div-icon",
          html: '<i class="fas fa-map-pin fa-2x" style="color: red;"></i>',
          iconSize: [22, 22],
          iconAnchor: [11, 22],
          popupAnchor: [0, -11],
        });
        var coordinates = data.coordinates.map((coord) => [coord[1], coord[0]]);
        var polyline = L.polyline(coordinates, { color: "black" }).addTo(map); // Shortest route
        map.fitBounds(polyline.getBounds());
        // Add marker at the start point
        var startMarker = L.marker(
          [data.coordinates[0][1], data.coordinates[0][0]],
          { icon: startIcon }
        ).addTo(map);
        var endMarker = L.marker([data.endpoint[1], data.endpoint[0]], {
          icon: endIcon,
        }).addTo(map);
        setBool(true);

        // Fit the map bounds to include all markers and the route polyline

        var evIcon = L.divIcon({
          className: "custom-div-icon",
          html: '<i class="fas fa-bolt fa-2x"></i>',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
          popupAnchor: [0, -11],
        });

        var evRangeIcon = L.divIcon({
          className: "ev-range-icon",
          html: '<i class="fas fa-bolt fa-2x"></i>',
          iconSize: [32, 32],
          iconAnchor: [11, 11],
          popupAnchor: [0, -11],
        });

        // Markers for EVs within range

        // console.log(data);
        if (
          data.rangeEvCoordinates[0] == 0 &&
          data.rangeEvCoordinates[1] == 0
        ) {
          console.log("OUT OF RANGE");
        } else {
          // Add markers for EV stations
          data.evStations.forEach((evStation) => {
            if (
              evStation.coordinates[0] == data.rangeEvCoordinates[1] &&
              evStation.coordinates[1] == data.rangeEvCoordinates[0]
            ) {
              var a = 10;
            } else {
              var marker = L.marker(evStation.coordinates, {
                icon: evIcon,
              }).addTo(map);
              marker.bindPopup(evStation.name);
            }
          });

          var s = L.marker(data.rangeEvCoordinates, {
            icon: evRangeIcon,
          }).addTo(map);
          s.bindPopup("Fastcharge");
        }
      })
      .catch((error) => console.error("Error fetching map:", error));
    // setTimeout(() => {
    //   window.dispatchEvent(new Event("resize"));
    // }, 500);
  }

  return (
    <>
      <div className="flex flex-column hvh ml-64">
        <div className="flex flex-column">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="wmax">
            <div className="flex ml-2 p-5 justify-between items-center wmax bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 h-20 rounded-md m-2 flex-column">
              {/* Source */}
              <div className="w-1/2 flex items-center">
                <div className="relative m-3 flex items-center">
                  <div className="mr-2">
                    <i className="fa fa-map-location-dot fa-2x text-white"></i>
                  </div>
                  <label htmlFor="source" className="text-white text-sm">
                    Source
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="startAddress"
                    type="text"
                    placeholder="Enter source..."
                    className="h-10 rounded-md w-60 pl-2 border focus:outline-none focus:border-blue-500"
                    onChange={(e) => {
                      setStartAddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="w-1/2 ml-0 flex items-center">
                <div className="relative m-3 flex items-center">
                  <div className="mr-2">
                    <i className="fa fa-map-pin fa-2x text-white"></i>
                  </div>
                  <label htmlFor="destination" className="text-white text-sm">
                    Destination
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setendAddress(e.target.value);
                    }}
                    id="endAddress"
                    type="text"
                    placeholder="Enter destination..."
                    className="h-10 rounded-md w-60 pl-2 border focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                {/* <input
                  onChange={(e) => {
                    setbatteryPercentage(e.target.value);
                  }}
                  type="number"
                  id="batteryPercentage"
                  name="battery-percentage"
                  min="0"
                  max="100"
                  required
                ></input> */}
              </div>
              <div className="justify-center items-center mr-10 ml-2">
                <button
                  className="btn bg-blue-600 text-white p-2 rounded-md font-medium"
                  onClick={fetchAndDisplayMap}
                >
                  Enter
                </button>
              </div>
              <b className="text-white mr-1">GreenRoutes</b>
              {/* Logo and Company Name */}
              <div className="flex items-center flex-row-reverse">
                {" "}
                {/* Updated class: flex-row-reverse */}
                <SiYourtraveldottv className="text-white text-3xl mr-2" />{" "}
                {/* Increased size */}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center rounded-md ml-2 h-64">
            <div className="flex-column justify-center items-center mr-3 hmax mt-5 shadow-md bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md mb-5">
              <div>
                <p className="font-medium text-2xl text-white">Tata Tiago EV</p>
              </div>
              <div>
                <img src={carimage} height={225} width={225} />
              </div>
              <div>
                <p className="font-medium text-white">
                  Battery:300kw <br></br>Charging:60kw/h(max)
                </p>
              </div>
            </div>
            <div className="flex-column ml-3">
              <div>Estimated Range: {number1}km</div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Default range
                </label>
                <input
                  id="default-range"
                  type="range"
                  value="50"
                  className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                ></input>
              </div>
              <div>
                <div className="flex flex-row">
                  <p>Selected the drive mode for today's journey</p>
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                    <button onClick={(e)=>{setNumber1(ans*1.25); setbatteryPercentage(number1);}}>Economy</button>
                  </div>
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                    <button onClick={(e)=>{setNumber1(ans*0.75);  setbatteryPercentage(number1);}}>Cruise</button>
                  </div>
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                  <button onClick={(e)=>{setNumber1(ans*0.5); setbatteryPercentage(number1);}}>Sports</button>
                  </div>
                </div>
              </div>
              <div>
                <p>Selection Regeneration Mode</p>
                <div className="flex">
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                   <button onClick={(e)=>{setNumber1(number1+20); setbatteryPercentage(number1);}}> Regeneration 1</button>
                  </div>
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                  <button onClick={(e)=>{setNumber1(number1+40); setbatteryPercentage(number1);}}> Regeneration 2</button>
                  </div>
                  <div className="text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md p-2 m-2">
                  <button onClick={(e)=>{setNumber1(number1+60); setbatteryPercentage(number1);}}> Regeneration 3 </button>
                  </div>
                </div>
              </div>
              <div>Battery % left:{(number1/ans)*100}</div>
            </div>
          </div>
          <div className="hmax wmax bg-gradient-to-r from-blue-500 to-purple-500 rounded-md border-2 m-2 mt-4">
            
           {bool?<div id="map-container" className="hmax wmax"></div>: <div id="map-container" className="hmax wmax"><img src={demomap} id="demomap1"/></div>

}
              
            
          </div>
          <div className="wmax h-64 mt-6">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
