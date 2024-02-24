import Footer from "@/smallcomponents/Footer";
import "../App.css";
import Sidebar from "@/smallcomponents/Sidebar";
//import MapCanvas from "./MapCanvas";
import { SiYourtraveldottv } from "react-icons/si";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet"; // Import Leaflet library
import MapCanvas from "./MapCanvas";
import { useState } from "react";
import { BentoGridDemo } from "./bento";

function LandingPage() {
  const [startAddress, setStartAddress] = useState("");

  const [endAddress, setendAddress] = useState("");
  function fetchAndDisplayMap() {
    fetch("http://127.0.0.1:5000/fetch_map", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startAddress: startAddress,
        endAddress: endAddress,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        var map = L.map("map-container").setView([0, 0], 2);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        var coordinates = data.coordinates.map((coord) => [coord[1], coord[0]]);
        var polyline = L.polyline(coordinates, { color: "blue" }).addTo(map); //shortest route
        map.fitBounds(polyline.getBounds());
        console.warn(data.ev_coordinates);
        var evIcon = L.divIcon({
          className: "custom-div-icon",
          html: '<i class="fas fa-bolt fa-2x"></i>',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
          popupAnchor: [0, -11],
        });

        //markers for EV
        data.ev_coordinates.forEach((evCoord) => {
          L.marker(evCoord, { icon: evIcon }).addTo(map);
        });
      })
      .catch((error) => console.error("Error fetching map:", error));
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
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
              </div>
              <div className="justify-center items-center mr-10 ml-2">
                <button
                  onClick={fetchAndDisplayMap}
                  className="btn bg-blue-600 text-white p-2 rounded-md font-medium"
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
          <div className="hmax wmax bg-gradient-to-r from-blue-500 to-purple-500 rounded-md border-2 m-2 mt-4">
            <div id="map-container" className="hmax wmax"></div>
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
