// Add console.log to check to see if our code is working.
console.log("working");

//initialize map
//set coordinates and zoom level
var map = L.map('mapid').setView([34.0522, -118.2437], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//markers, circles, and polygons
//mapping multiple points
// get data from cities.js
let cityData = cities;

//loop through all the cities and create one marker per city
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        color: 'yellow',
        fillcolor: 'orage',
        fillOpacity: 0.5,
        radius: city.population / 100000
    })
    //add a popup
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population" + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});