const geoCodeButton = document.querySelector('form');
let userInput = document.querySelector('form input');
const apiKey = 'pk.eyJ1IjoianVhbmRhOTMiLCJhIjoiY2xxaHQ2eThqMDFlNTJudGRxemR2eXd6bSJ9.kGsejmgnLUR7B208_qNcpg'
let coordinatesArray = []

const constructUrl = (userInput) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${apiKey}`;
};

const formatAndDisplayCoordinates = (data) => {
  const coordinatesElement = document.querySelector('.font-monospace');
  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];
  coordinatesArray.push(longitude, latitude)
  const coordinates = `${longitude}, ${latitude}`;

  coordinatesElement.textContent = coordinates;
  showMap(apiKey)
};

const displayCoordinates = (userInput) => {
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then( data => formatAndDisplayCoordinates(data));
}


const showMap = (apiKey) => {
  mapboxgl.accessToken = apiKey
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: coordinatesArray,
    zoom: 12
  });
};

geoCodeButton.addEventListener('submit', (event) => {
  event.preventDefault();
  userInput = userInput.value;
  displayCoordinates(userInput);
});
