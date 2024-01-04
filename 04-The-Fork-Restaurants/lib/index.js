// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)
const searchForm = document.getElementById("searchForm");

const constructEndPoint = (category) => {
  return `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${category}`
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
}

searchForm.addEventListener("submit", (event) => {
  const endPoint = constructEndPoint(getCuisineSelected())
  event.preventDefault();
  fetch(endPoint)
    .then(response => response.json())
    .then((data) => instertHtmlData(data));
})
