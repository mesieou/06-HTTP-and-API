const form = document.querySelector('form')

const formattedDate = () => {
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en-US', options).format(currentDate);
}

const constructUrl = () => {
  const city = document.querySelector('#input').value
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3610274c79ad18f14591bc2e9ae44b31&units=metric`
}

const insertHTML = (data) => {
  const cityHtml = document.querySelector('#city')
  const descriptionHtml = document.querySelector('#description')
  const temperatureHtml = document.querySelector('#temperature')
  const iconHtml = document.querySelector('#icon')
  const dateHtml = document.querySelector('#date')
  const url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

  cityHtml.innerHTML = data.name;
  descriptionHtml.innerHTML = data.weather[0].description;
  temperatureHtml.innerHTML = data.main.temp;
  iconHtml.src = url;
  dateHtml.textContent = formattedDate();
}

const fetchWeather = () => {
  const url = constructUrl()
  fetch(url)
  .then(response => response.json())
  .then((data) => insertHTML(data));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  fetchWeather();
});
