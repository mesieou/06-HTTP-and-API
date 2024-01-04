const geoCodeButton = document.querySelector('form');
let userInput = document.querySelector('form input');


const constructUrl = (userInput) => {
  const apiKey = 'pk.eyJ1IjoianVhbmRhOTMiLCJhIjoiY2xxaHQ2eThqMDFlNTJudGRxemR2eXd6bSJ9.kGsejmgnLUR7B208_qNcpg'
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${apiKey}`;
};

const formatAndDisplayCoordinates = (data) => {
  const coordinatesElement = document.querySelector('.font-monospace');
  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];
  const coordinates = `${longitude}, ${latitude}`;

  coordinatesElement.textContent = coordinates;
};

const displayCoordinates = (userInput) => {
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then( data => formatAndDisplayCoordinates(data));
}

geoCodeButton.addEventListener('submit', (event) => {
  event.preventDefault();
  userInput = userInput.value;
  displayCoordinates(userInput);
});

const showMap = (userInput) => {
  // console.log(userInput)
  // displayCoordinates(coordinates)
  // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      // - Add a marker to the map at the coordinates

};
