//MADRID
function updateTime () {
let madridElement = document.querySelector("#madrid");
let madridDateElement = madridElement.querySelector(".date");
let madridTimeElement = madridElement.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");

madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("HH:mm:SS [<small>]A[</small>]");
 //I write small inside brackets because is HTML 


//DUBLIN
let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
dublinTimeElement.innerHTML = dublinTime.format("HH:mm:SS [<small>]A[</small>]"); //I write small inside brackets because is HTML

//ARIZONA
let arizonaElement = document.querySelector("#arizona");
let arizonaDateElement = arizonaElement.querySelector(".date");
let arizonaTimeElement = arizonaElement.querySelector(".time");
let arizonaTime = moment().tz("US/Arizona");

arizonaDateElement.innerHTML = arizonaTime.format("MMMM Do YYYY");
arizonaTimeElement.innerHTML = arizonaTime.format("HH:mm:SS [<small>]A[</small>]"); //I write small inside brackets because is HTML
}

updateTime();
setInterval(updateTime, 1000);