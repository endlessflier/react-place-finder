# Restaurant Finder

Restaurant Finder is a web app service built with React, Routing, Jest and MobX that helps customers pick a restaurant close to their office in Roppongi. The app allows for random restaurant selection, keyword search for restaurants, display of a map view of the selected restaurant, and provides a page with restaurant details such as menu, pictures, and reviews. The application uses open APIs such as Foursquare Places API for getting actual data. The application uses the react-google-maps package to display the map view and get location data.

## Technical Architecture

The Restaurant Finder application is built using React, Routing, Jest, MobX, and the react-google-maps package. The application uses a Flux architecture, with a restaurantStore that holds the state for the application, and actions that update that state. The StoreProvider component from MobX is used to provide the store to the components that need it.
Check the details [Here](https://github.com/endlessflier/react-place-finder/blob/feat/update-documents/document.md)

## Technical Choices

The react-google-maps package was chosen to display the map view and get location data because it is easy to use and well-documented. MobX was chosen as the state management library because it provides a simple and intuitive way to manage application state, and integrates well with React.

## Trade-offs

One trade-off made in this project was to use the react-google-maps package instead of the Foursquare Places API. While the Foursquare API provides more detailed information about restaurants, using the react-google-maps package simplifies the application and makes it easier to use. Another trade-off was to use Redux instead of MobX for state management. While Redux is more popular and widely-used, MobX is easier to learn and use for smaller projects.

## Additional Features

One additional feature that would greatly enhance our application is the ability for users to filter restaurants by favorite, name, or rating. By implementing this feature, users will be able to easily find restaurants that meet their specific dietary preferences and tastes.
In addition, I have already implemented a simple responsive function that allows the application to adapt to different screen sizes. However, I understand that there is room for improvement, and I am committed to designing a more user-friendly and visually appealing interface.
I can also explore adding new pages to the application, such as a Setting page, Login Page, and Notification Page, to enhance the user experience. With these additions, users will have greater control over their preferences and will be kept informed of important updates.

Overall, I am confident that these additional features will greatly enhance the user experience and make our application stand out from the competition.

## Code Quality

The code for this project is written in a modular and organized way, with each component in its own file and functions separated into their own modules. The code is also well-documented, with comments explaining each section of code.

## Testing

The Restaurant Finder application has been thoroughly tested using Jest. Tests have been written for the Home, RestaurantDetailsPage, RestaurantList, RestaurantCard, and restaurantStore components to ensure that the application functions correctly and the state is managed properly.

## Conclusion

The Restaurant Finder application is a simple and intuitive way for customers to find a restaurant close to their office in Roppongi. It uses the react-google-maps package to display the map view and get location data, and MobX for state management. The application is well-documented and tested, and could be easily extended with additional features.
Check the live demo [HERE](https://react-restaurant-finder.vercel.app/).

## Link to Other Code

Here is a link to my Github profile where you can find other code that I'm particularly proud of: [Here](https://github.com/endlessflier/my-react-ts-highcharts)

## Link to Resume

Here is a link to my resume or public profile:
[Resume](https://docs.google.com/document/d/1Bf3u7H3JoZhsZWHlFOlJipvrhzLbE-ry/edit?usp=share_link&ouid=103550853731738036469&rtpof=true&sd=true)
