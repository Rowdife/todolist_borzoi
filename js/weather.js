const API_KEY = "0468c7e2cc11eb4f2e4f2edb063168e8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `@${data.name}`;
      weather.innerText = ` ${Math.round(data.main.temp)}c°,  ${
        data.weather[0].main
      }  `;
    })
  );
}
function onGeoError() {
  console.log("Can't find your location");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
