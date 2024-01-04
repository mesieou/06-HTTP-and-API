// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)
const constructEndPoint = (category) => {
  return `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${category}`
};


const searchForm = document.getElementById("searchForm");

// Todo: select the HTML elements you need


searchForm.addEventListener("submit", (event) => {
  // Todo: Find the category selected and build the URL you will send your request to
  event.preventDefault();
  const allcuisineElements = document.querySelectorAll('.form-check-input')
  const allcuisineElementsArray = Array.from(allcuisineElements)
  const cuisineSelectedElement = allcuisineElementsArray.filter(element => element.checked);

  const categorySelected = cuisineSelectedElement[0].defaultValue
  const endPoint = constructEndPoint(categorySelected)

  const restaurantsHtmlContainer = document.querySelector('.list-group')
  // Todo: Replace "the-endpoint-url" with the URL you built
  fetch(endPoint)
    .then(response => response.json())
    .then((data) => {
      const restaurantsHtml = data.map(restaurant => `<li class="list-group-item">${restaurant.name}</li>`).join('')
      restaurantsHtmlContainer.innerHTML = restaurantsHtml;
    });
})
