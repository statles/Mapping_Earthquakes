// Add console.log to check to see if our code is working.
console.log("working");

//initialize map
//set coordinates and zoom level
var map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//markers, circles, and polygons
//add marker to the map for Los Angeles, California
//var marker = L.marker([34.0522, -118.2437]).addTo(map);

//add a circle to the map
//use circle() or circlerMarker()

L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.2,
    //change the radius to make the circle bigger or smaller
    //the radius is measured in meters
    radius: 300
}).addTo(map);