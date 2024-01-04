// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)
const searchForm = document.getElementById("searchForm");

const constructEndPoint = (cuisine, location) => {
  return `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${cuisine}&location=${location}`
};

const instertHtmlData = (data) => {
  const restaurantsHtmlContainer = document.querySelector('.list-group')
  const restaurantsHtml = data.map(restaurant => `<li class="list-group-item">${restaurant.name}</li>`).join('')
  restaurantsHtmlContainer.innerHTML = restaurantsHtml;
};

const getCuisineSelected = () => {
  const allcuisineElements = document.querySelectorAll('.form-check-input')
  const allcuisineElementsArray = Array.from(allcuisineElements)
  const cuisineSelectedElement = allcuisineElementsArray.filter(element => element.checked);
  return cuisineSelectedElement[0].defaultValue
};

const getLocation = () => {
  return document.querySelector('#location').value
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const endPoint = constructEndPoint(getCuisineSelected(), getLocation())
  fetch(endPoint)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      instertHtmlData(data)});
})
