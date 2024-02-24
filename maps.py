

from flask import Flask, render_template, jsonify, request
import openrouteservice as ors

app = Flask(__name__)

# Replace 'YOUR_API_KEY' with your actual API key
CLIENT = ors.Client(key='5b3ce3597851110001cf6248266c3dd67e9b43748ff1423ec5f335c6')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fetch_map', methods=['POST'])
def fetch_map():
    data = request.json
    start = (data['startLon'], data['startLat'])
    end = (data['endLon'], data['endLat'])

    # Get directions
    directions = CLIENT.directions(
        coordinates=[start, end],
        profile='driving-car',
        format='geojson'
    )

    # Extract coordinates from the route
    coordinates = []
    for feature in directions['features']:
        for coord in feature['geometry']['coordinates']:
            coordinates.append(coord)

    return jsonify({'coordinates': coordinates})

if __name__ == '__main__':
    app.run(debug=True)

