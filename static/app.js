let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function onMapClick(e) {
  console.log("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);

//const marker = L.marker([51.5, -0.09]).addTo(map);

fetch("api/notes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0]);
    let marker = L.marker([data[0].lat, data[0].lng]).addTo(map);
    console.log(marker);
    marker.bindPopup(data[0].content);
  });
