const apiKey = '[API Key Here]';

function getWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      document.getElementById('weather').innerHTML = `
        <p>${temperature} &deg;F</p>
      `;
    })
    .catch(error => console.error(error));
}

document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  getWeather(city);
});