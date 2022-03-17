// Add console.log to check to see if our code is working.
console.log("working");

//initialize map
//set coordinates and zoom level
var map = L.map('mapid').setView([34.0522, -118.2437], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

//markers, circles, and polygons
//add marker to the map for Los Angeles, California
var marker = L.marker([34.0522, -118.2437]).addTo(map);