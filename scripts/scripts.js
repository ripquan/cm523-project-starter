/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
var map = L.map('map').setView([42.3601, -71.0589], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const spotMenu = document.getElementById('spot-menu');
const header = document.getElementById('header');
let spotName = document.getElementById('spot-name');
let description = document.getElementById('description');
let spotPic = document.getElementById('spot-pic');
let imageOutput = document.getElementById('output');
let spotType = document.getElementById('spot-type');
let rating = document.getElementById('rating');
let bustFactor = document.getElementById('bust-factor');
let uploadBtn = document.getElementById('upload');
let marker = '';


map.on("dblclick", function(e){
   marker = new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
   spotMenu.classList.toggle("open");
   header.classList.toggle("close");
   let pins = [];

   function pinInfo(){
    let info = {};
    info.spotName = spotName.value;
    info.description = description.value;
    info.imageOutput = imageOutput.value;
    info.spotType = spotType.value;
    info.rating = rating.value;
    info.bustFactor = bustFactor.value;
   // marker.bindPopup(`Spot Name: ${info.spotName}\nDescription: ${info.description}\n${info.spotPic}\nSpot Type: ${info.spotType}\nRating: ${info.rating}  Bust Factor: ${info.bustFactor}`).openPopup();
    
    pins.push(info);
    updatePins(pins);
   }
   uploadBtn.addEventListener('click', pinInfo);
})
uploadBtn.addEventListener('click', toggleMenus);
function toggleMenus(){
  spotMenu.classList.toggle("open");
  header.classList.toggle("close");

}
// function pinInfo(){
// 	let info = {};
// 	info.spotName = spotName.value;
// 	info.description = description.value;
// 	info.spotPic = spotPic.value;
// 	info.spotType = spotType.value;
//   info.rating = rating.value;
//   info.bustFactor = bustFactor.value;
// 	console.log(info);
// }

// uploadBtn.addEventListener('click', pinInfo);

// function addPin() {

// }


function updatePins(pins){
  console.log('pin array' , pins);
  pins.forEach( pin => {
    console.log('loop');
    marker.bindPopup(`Spot Name: ${pin.spotName}\nDescription: ${pin.description}\n${pin.imageOutput}\nSpot Type: ${pin.spotType}\nRating: ${pin.rating}  Bust Factor: ${pin.bustFactor}`).openPopup();

  });
}

spotPic.addEventListener("change", async () => {
  let [file] = spotPic.files

  const reader = new FileReader();
  reader.onload = (e) => {
    imageOutput.src = e.target.result;
  };

  reader.onerror = (err) => {
      console.error("Error reading file:", err);
      alert("An error occurred while reading the file.");
  };


  reader.readAsDataURL(file);
})