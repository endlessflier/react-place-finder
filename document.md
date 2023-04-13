# Project Structure

root/
|-- src/
|   |-- components/
|   |   |-- DropHoursTable.jsx
|   |   |-- LoadingIndicator.js
|   |   |-- MapComponent.jsx
|   |   |-- Modal.js
|   |   |-- RestaurantList.jsx
|   |   |-- RestaurantCard.jsx
|   |   |-- RoundedButton.js
|   |   |-- SearchField.js
|   |   |-- TopNavigation.jsx
|   |   |-- TypegraphyWithIcon.js
|   |
|   |-- pages/
|   |   |-- HomePage.jsx
|   |   |-- RestaurantDetailsPage.jsx
|   |
|   |-- stores/
|   |   |-- restaurantStore.js
|   |   |-- useStore.js
|   |
|   |-- tests/
|   |   |-- DropHoursTable.test.jsx
|   |   |-- RestaurantCard.test.jsx
|   |   |-- RestaurantList.test.jsx
|   |   |-- HomePage.test.jsx
|   |   |-- RestaurantDetailsPage.test.jsx
|   |   |-- restaurantStore.test.js
|   |
|   |-- App.jsx
|   |-- index.jsx
|
|-- public/
|   |-- index.html
|   |-- favicon.ico
|
|-- README.md
|-- package.json
|-- .gitignore

In this directory structure, we have the following:
o	src/ directory contains all the source code for the application.
•	components/ directory contains all the React components in the project.
•	pages/: This directory contains the top-level pages of the application.
The HomePage component is the landing page, where users can search for restaurants or pick a random one.
The RestaurantPage component displays a list of restaurants based on the user's search criteria.
The RestaurantDetailsPage component shows the details of a particular restaurant.
•	stores/ directory contains the restaurantStore.js file which stores the data for restaurants.
•	services/ directory contains the googleMapsService.js file which interacts with the Google Maps API to get data for restaurants.
Used the Map component from google-maps-react to display the map and set the initial center to the company location.
Used the Marker component from google-maps-react to place a marker at the company location.
Used the Places component from google-maps-react to search for nearby restaurants and display them as markers on the map.
•	App.jsx is the main component that renders all other components.
•	index.jsx is the entry point for the application.
o	tests/ directory contains all the test files for the application.
•	components/ directory contains test files for all the components.
•	stores/ directory contains the test file for the restaurantStore.js.
o	.gitignore file specifies files and directories that Git should ignore.
o	package.json file contains information about the project and the packages used.
o	README.md file contains information about the project, how to run it, and how to contribute.
With this directory structure, I can easily manage my source code and tests separately.



## Restaurants Finder App

This is a web app service built with React, Routing, Jest and MobX that helps customers pick a restaurant close to their office in Roppongi. The app allows for random restaurant selection, keyword search for restaurants, display of a map view of the selected restaurant, and provides a page with restaurant details such as menu, pictures, and reviews. The application uses open APIs such as Foursquare Places API for getting actual data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/roppongi-restaurants-web-app.git`
2. Install dependencies: `yarn install`
3. Create a `.env` file in the root directory with your API key:
   REACT_APP_GOOGLE_MAP_API_KEY='API_KEY'
   REACT_APP_FOURSQUARE_API_KEY='API_KEY'
4. Start the app: `yarn start`
5. Open your browser and go to `http://localhost:3000`

## Usage

To use the app, follow these steps:

1. Enter a keyword into the search bar to find a specific restaurant, or click the "Random Restaurant" button to get a random suggestion.
2. Select a restaurant from the search results or the random suggestion.
3. View the restaurant details, including the menu, pictures, and reviews.
4. Click the "Map View" button to see the restaurant's location on a map.

## API Reference

This app uses the [Foursquare Places API](https://developer.foursquare.com/docs/places-api/) to retrieve information about restaurants in Roppongi.

## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
