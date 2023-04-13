Restaurant Finder
Restaurant Finder is a web application that helps customers pick a restaurant close to their office in Roppongi. The app allows for random restaurant selection, keyword search for restaurants, display of a map view of the selected restaurant, and provides a page with restaurant details such as menu, pictures, and reviews. The application uses the react-google-maps package to display the map view and get location data, and allows users to search for restaurants within a certain radius.

Technical Choices
Architecture
The Restaurant Finder application is built using React, Routing, Jest, MobX, and the react-google-maps package. The application uses a Flux architecture, with a restaurantStore that holds the state for the application, and actions that update that state. The StoreProvider component from MobX is used to provide the store to the components that need it.

Technical Choices
The react-google-maps package was chosen to display the map view and get location data because it is easy to use and well-documented. MobX was chosen as the state management library because it provides a simple and intuitive way to manage application state, and integrates well with React.

Trade-offs
One trade-off made in this project was to use the react-google-maps package instead of the Foursquare Places API. While the Foursquare API provides more detailed information about restaurants, using the react-google-maps package simplifies the application and makes it easier to use. Another trade-off was to use MobX instead of Redux for state management. While Redux is more popular and widely-used, MobX is easier to learn and use for smaller projects.

Additional Features
One additional feature that could be added to the application is the ability to filter restaurants by cuisine or rating. This would require additional API calls to get more detailed information about each restaurant.

Code Quality
The code for this project is written in a modular and organized way, with each component in its own file and functions separated into their own modules. The code is also well-documented, with comments explaining each section of code.

Testing
The Restaurant Finder application has been thoroughly tested using Jest and Enzyme. Tests have been written for the RestaurantPage, RestaurantDetailsPage, MapComponent, and restaurantStore components to ensure that the application functions correctly and the state is managed properly.

Conclusion
The Restaurant Finder application is a simple and intuitive way for customers to find a restaurant close to their office in Roppongi. It uses the react-google-maps package to display the map view and get location data, and MobX for state management. The application is well-documented and tested, and could be easily extended with additional features.

Link to Other Code
Here is a link to my Github profile where you can find other code that I'm particularly proud of: github.com/yourusername

Link to Resume
Here is a link to my resume or public profile: linkedin.com/in/yourusername
