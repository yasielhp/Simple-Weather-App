# Weather App

This application allows you to view the weather forecast in your current location or anywhere in the world.

## Technologies used
- React.js: JavaScript framework for creating web applications
- Tailwind CSS: CSS styling framework
- Vite.js: fast and lightweight development server
- useGeoLocation and useFetchCurrent: two custom hooks for getting the user's location and retrieving weather forecast data

## Features
- Shows the current weather forecast in your location or any location in the world
- Shows the current temperature, feels like temperature, humidity, UV index, visibility, wind speed, and wind direction
- Allows searching for the weather forecast in a specific location through a search bar

## Usage instructions
- Open the application in your browser
- Accept the permission to access your location (if you don't, the application won't be able to show you the weather forecast in your location)
- If you want to see the weather forecast in a specific location, type the city name or postal code in the search bar and press Enter
- The application will show the weather forecast in the searched location or in your current location (if no search has been made).

## Considerations
- If access to the user's location is not allowed, the application won't be able to show the weather forecast in the current location. In this case, a message will be shown asking the user to allow access to their location.
- If a search is made for a non-existent location or weather forecast data cannot be obtained for that location, a message will be shown indicating that no data was found.
- The application uses the Weather API service to obtain weather forecast data. If this service is unavailable or experiencing problems, the application may also show an error message.
