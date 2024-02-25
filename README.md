# Green Routes

Green Routes is a web application designed to help electric vehicle (EV) owners plan their journeys efficiently by displaying electric vehicle charging stations along their route from start to end point on a map. Users can also pre-book slots at these charging stations to ensure a smooth and hassle-free journey. This README provides information on the project, its purpose, installation instructions, and other relevant details.

## Table of Contents

1. [Description](#description)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Description

Green Routes aims to facilitate electric vehicle travel by providing users with a convenient way to locate charging stations along their intended route. By leveraging the power of mapping technology and integration with Openrouteservice, the application calculates the most efficient route for electric vehicles and displays charging station options en route. Additionally, users can pre-book slots at these charging stations, ensuring availability when needed.

## Tech Stack

- **Frontend**: React with TypeScript (TSX)
- **Backend**: Node.js
- **Mapping API**: Openrouteservice along with Leaflet
- **Geocoding**: Folium and Paleas with Flask (integrated with Node.js)
- **Database**: MySQL

## Installation

To run Green Routes locally, follow these steps:

1. Clone the repository from GitHub:

```
git clone https://github.com/vaishnavi23-03/SYNERGY_BinaryBrigades.git
cd SYNERGY_BinaryBrigades
```

2. Install dependencies for the frontend and backend:

```
# For the frontend
cd frontend
npm i


# For the backend
cd ../backend
npm install
pip install openrouteservice, apikey, Flask
```




3. Access Green Routes in your web browser at `http://localhost:5173`.

## Usage

- Upon accessing Green Routes, users can enter their start and end points to generate a route.
- The application will display charging station options along the route, along with information such as location, availability, and pricing.
- Users can pre-book slots at their preferred charging stations to ensure availability during their journey.

## Contributing

Contributions to Green Routes are welcome! To contribute, please follow these guidelines:
- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure all tests pass.
- Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).
