/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
var map = L.map('map').setView([42.3601, -71.0589], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const addSpot = document.getElementById('new-spot');
addSpot.addEventListener('click', openNav);

function openNav() {
    document.getElementById("spot-menu").style.height = "100%";
    console.log('opened')
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("spot-menu").style.height = "0%";
  }