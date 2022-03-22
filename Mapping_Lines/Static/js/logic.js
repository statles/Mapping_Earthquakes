// Add console.log to check to see if our code is working.
console.log("working");

//initialize map
//set coordinates and zoom level
var map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//coordinates for each point used in a line
// let line = [
//     [33.9416, -118.4085], 
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

//create a line using polyline
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map);

//skill drill
let newLine = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

L.polyline(newLine, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: '5,10'

}).addTo(map);