const geoCodeButton = document.querySelector('form');
let userInputElement = document.querySelector('form input');
const apiKey = 'pk.eyJ1IjoianVhbmRhOTMiLCJhIjoiY2xxaHQ2eThqMDFlNTJudGRxemR2eXd6bSJ9.kGsejmgnLUR7B208_qNcpg'

const constructUrl = (userInputElement) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInputElement}.json?access_token=${apiKey}`;
};

const showMap = (longitude, latitude) => {
  mapboxgl.accessToken = apiKey
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [longitude, latitude],
    zoom: 12
  });
};

const formatAndDisplayCoordinates = (data) => {
  const coordinatesElement = document.querySelector('.font-monospace');
  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];
  const coordinates = `${longitude}, ${latitude}`;

  coordinatesElement.textContent = coordinates;
  showMap(longitude, latitude)
};

const displayCoordinates = (userInput) => {
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then( data => formatAndDisplayCoordinates(data));
}

geoCodeButton.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = userInputElement.value;
  displayCoordinates(userInput);
});
