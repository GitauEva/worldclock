//update the time on the page
function updateTime() {
  //Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");

    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //paris
  let parisElement = document.querySelector("#paris");

  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Jamaica
  let jamaicaElement = document.querySelector("#jamaica");
  if (jamaicaElement) {
    let jamaicaDateElement = jamaicaElement.querySelector(".date");
    let jamaicaTimeElement = jamaicaElement.querySelector(".time");
    let jamaicaTime = moment().tz("America/Jamaica");

    jamaicaDateElement.innerHTML = jamaicaTime.format("MMMM Do YYYY");
    jamaicaTimeElement.innerHTML = jamaicaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time" id="time">
        <span id="time-container">${cityTime.format("h:mm:ss")}</span>
        <small id="season">${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);
