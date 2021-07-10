const apiKey = "6319f5692d4f24b3dd01ad3a7c3a47b7";
const geo = document.getElementById("geo");

function geoOK(p) {
  const lat = p.coords.latitude;
  const lon = p.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const temp_min = data.main.temp_min;
      const temp_max = data.main.temp_max;
      geo.innerText = `${name} @ ${weather} \n 현재기온 ${temp}\n최저기온 ${temp_min}도, 최고기온 ${temp_max}`;
    });
}
function geoError() {
  geo.innerText = "위치를 가져올 수 없습니다.";
}
navigator.geolocation.getCurrentPosition(geoOK, geoError);
