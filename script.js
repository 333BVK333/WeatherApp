let find = document.querySelector("#find");
let value;
let image = document.querySelector(".image");
let title = document.querySelector(".title");
let city = document.querySelector(".city");
let sides = document.querySelector(".sides");

find.addEventListener("click", async () => {
  value = document.querySelector("#search").value.toLowerCase();
  if (value != "") {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ff20e91b4db110ce758bf9216c8e3dcd`
    );
    let data = await res.json();
    if (data.cod == 200) {
      degree.innerText = Math.ceil(data.main.temp - 273) + "°C";

      function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }

      place.innerText = titleCase(value);
        // value.toLowerCase().charAt(0).toUpperCase() + value.slice(1);
      humidity.innerText = `${data.main.humidity} %`;
      wind.innerText = Math.floor(data.wind.speed) + " km/hr";
      let check = data.weather[0].main.toLowerCase();
      if (check == "clouds") {
        image.src = "imgs/cloudy.png";
      } else if (check == "clear") {
        image.src = "imgs/clear.png";
      } else if (check == "drizzle") {
        image.src = "imgs/drizzle.png";
      } else if (check == "mist") {
        image.src = "imgs/mist.png";
      } else if (check == "rain") {
        image.src = "imgs/rain.png";
      } else if (check == "snow") {
        image.src = "imgs/snow.png";
      } else {
        image.src = "imgs/cloudy.png";
      }

      image.style.display = "flex";
      title.style.display = "flex";
      city.style.display = "flex";
      sides.style.display = "flex";
    }
  } else {
    alert("Please Enter City Name");
  }
});
