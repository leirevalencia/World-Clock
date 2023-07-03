//MADRID
function updateTime () {
let madridElement = document.querySelector("#madrid");
if (madridElement) {
let madridDateElement = madridElement.querySelector(".date");
let madridTimeElement = madridElement.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");

madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("HH:mm:SS [<small>]A[</small>]");
 //I write small inside brackets because is HTML 
}

//DUBLIN
let dublinElement = document.querySelector("#dublin");
if (dublinElement) {
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
dublinTimeElement.innerHTML = dublinTime.format("HH:mm:SS [<small>]A[</small>]"); //I write small inside brackets because is HTML
}

//ARIZONA
let arizonaElement = document.querySelector("#arizona");
if (arizonaElement) {
let arizonaDateElement = arizonaElement.querySelector(".date");
let arizonaTimeElement = arizonaElement.querySelector(".time");
let arizonaTime = moment().tz("US/Arizona");

arizonaDateElement.innerHTML = arizonaTime.format("MMMM Do YYYY");
arizonaTimeElement.innerHTML = arizonaTime.format("HH:mm:SS [<small>]A[</small>]"); //I write small inside brackets because is HTML
}
}

updateTime();
setInterval(updateTime, 1000);

//CHANGE SELECT
function changeCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city" >
                <div>
                    <h2>
                        ${cityTimeZone}
                    </h2>
                    <div class="date">
                        ${cityTime.format("MMMM Do YYYY")}
                     </div>
                </div>
                <diV class="time">
                    ${cityTime.format("HH:mm:SS [<small>]A[</small>]")}
                </diV>
            </div>
    `;
}


let citiesElement = document.querySelector("#choose-city");
citiesElement.addEventListener("change", changeCity);
