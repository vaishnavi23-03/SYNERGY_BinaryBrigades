from flask import Flask, render_template, jsonify, request
import openrouteservice as ors

app = Flask(__name__)

# Replace 'YOUR_API_KEY' with your actual API key
CLIENT = ors.Client(key='5b3ce3597851110001cf6248266c3dd67e9b43748ff1423ec5f335c6')
PELIAS_URL = 'https://api.geocode.earth/v1/search'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fetch_map', methods=['POST'])
def fetch_map():
    data = request.json
    start_address = data['startAddress']
    end_address = data['endAddress']
    battery_percentage = float(data['batteryPercentage'])  # New: Get battery percentage from request

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

    # Find EVs within 1km range of the route
    route_line = {'type': 'LineString', 'coordinates': coordinates}
    pois = CLIENT.places(
        request='pois',
        geojson=route_line,
        buffer=1000,  # 1km buffer
        filter_category_ids=[596]  # EV charging station category ID
    )

    ev_coordinates = [list(reversed(poi['geometry']['coordinates'])) for poi in pois['features']]

    # ev_stations = []
    # for poi in pois['features']:
    #     if(poi['properties']['name']==None):
    #         names='ChargeFast'
    #         ev_station = {
    #             'name': names,
    #             'coordinates': list(reversed(poi['geometry']['coordinates']))
    #         }
    #     else:
    #          ev_station = {
    #         'name': poi['properties']['name'],
    #         'coordinates': list(reversed(poi['geometry']['coordinates']))
    #     }
    #     ev_stations.append(ev_station)
    ev_stations = []
    for poi in pois['features']:
        if 'name' in poi['properties']:
            name = poi['properties']['name']
        else:
            name = "FastCharge"
    
        ev_station = {
            'name': name,
            'coordinates': list(reversed(poi['geometry']['coordinates']))
        }
        ev_stations.append(ev_station)


    # Calculate remaining distance based on battery percentage
    total_distance = (directions['features'][0]['properties']['segments'][0]['distance'] )
    total_distance=total_distance # in m
    remaining_distance = battery_percentage * 2.5 * 1000 # Assuming 100% battery corresponds to 
    option_evs = []
    for ev_coord in ev_coordinates:
        distance_to_ev = directions = CLIENT.directions(
        coordinates=[start_coords, [ev_coord[1], ev_coord[0]]],
        profile='driving-car',
        format='geojson'
    )
        if distance_to_ev is not None :
            ev_distance = distance_to_ev['features'][0]['properties']['segments'][0]['distance']

            if ev_distance is not None:
                if ev_distance <= remaining_distance:
                    option_evs.append([ev_coord, ev_distance])
                
   
    #Find EV station with max distance among options
    if option_evs:
        x=0            
        for i in option_evs:
            if(i[1]>x): 
                y=i[0]
                x=i[1]
            
    else:
        y=[0,0]

    return jsonify({'coordinates': coordinates, 'evCoordinates': ev_coordinates, 'rangeEvCoordinates': [y[0],y[1]] , 'evStations': ev_stations, 'endpoint':end_coords})
    
if __name__ == '__main__':
    app.run(debug=True)
