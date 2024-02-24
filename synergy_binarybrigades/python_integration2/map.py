from flask import Flask, render_template, jsonify, request
import openrouteservice as ors
from flask_cors import CORS, cross_origin
import requests
 
 
app = Flask(__name__)
 
# Replace 'YOUR_API_KEY' with your actual API key
CLIENT = ors.Client(key='5b3ce3597851110001cf6248266c3dd67e9b43748ff1423ec5f335c6')
PELIAS_URL = 'https://api.geocode.earth/v1/search'
cors = CORS(app)
 
@app.route('/')
def serve_react_app():
    return render_template('index.html')
 
@app.route('/fetch_map', methods=['POST'])
def fetch_map():
    data = request.json
    start_address = data['startAddress']
    end_address = data['endAddress']

    # Geocode start and end addresses using Pelias
    start_result = CLIENT.pelias_search(text=start_address, focus_point=[0, 0])
    end_result = CLIENT.pelias_search(text=end_address, focus_point=[0, 0])

    # Extract start and end coordinates from the results
    if start_result['features'] and end_result['features']:
        start_coords = start_result['features'][0]['geometry']['coordinates']
        end_coords = end_result['features'][0]['geometry']['coordinates']
    else:
        return jsonify({'error': 'Failed to geocode addresses'})
        # Directions (shortest route)
    directions = CLIENT.directions(
        coordinates=[start_coords, end_coords],
        profile='driving-car',
        format='geojson'
    )

    # Route coordinates
    coordinates = []
    for feature in directions['features']:
        for coord in feature['geometry']['coordinates']:
            coordinates.append(coord)

    # EVs on the way (1km radius)
    pois = CLIENT.places(
        request='pois',
        geojson={'type': 'LineString', 'coordinates': coordinates},
        buffer=1000,
        filter_category_ids=[596]
    )

    ev_coordinates = [list(reversed(poi['geometry']['coordinates'])) for poi in pois['features']]

    return jsonify({'coordinates': coordinates, 'ev_coordinates': ev_coordinates})
 
if __name__ == '__main__':
    app.run(debug=True)