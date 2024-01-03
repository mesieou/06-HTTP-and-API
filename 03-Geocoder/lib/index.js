// TODO: Create a function to get the coordinates from an address and display a map with a marker on it

const constructUrl = (userInput) => {
  const apiKey = 'pk.eyJ1IjoianVhbmRhOTMiLCJhIjoiY2xxaHQ2eThqMDFlNTJudGRxemR2eXd6bSJ9.kGsejmgnLUR7B208_qNcpg'
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${apiKey}`;
};

const extractCoordinates = (userInput) => {
  const coordinates = fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then((data) => {
      const longitude = data.features[0].center[0];
      const latitude = data.features[0].center[1];
      const coordinates = `${longitude}, ${latitude}`
      return coordinates;
    });
  return coordinates;
}

const displayCoordinates = (coordinates) => {
  const geoCodeButton = document.querySelector('form');
  const coordinatesElement = document.querySelector('.font-monospace');

  geoCodeButton.addEventListener('submit', event => {
    event.currentTarget.textConent = coordinates;
  });
}

const getUserInput = () => {

  const geoCodeButton = document.querySelector('form');
  let userInput = document.querySelector('form input');
  console.log(userInput.value)

  geoCodeButton.addEventListener('submit', (event) => {
    event.preventDefault();
    userInput = userInput.value
    return userInput
  });
  console.log(userInput.value)
};

const showMap = (userInput) => {

  const coordinates = extractCoordinates(userInput)
  displayCoordinates(coordinates)
  // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates

};

getUserInput()
showMap(getUserInput)
//
// TODO: Select the form element
// TODO: Add event listener to the form that:
// - Prevents the default form submission behavior
// - Get the user input
// - Calls the showMap function with the user input as an argument
