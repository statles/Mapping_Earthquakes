// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

//initialize map
//set coordinates and zoom level
var map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
});

//use control layers to control the map
L.control.layers(baseMaps).addTo(map);

//accessing airport data
let airportData = "https://raw.githubusercontent.com/statles/Mapping_Earthquakes/main/majorAirports.json"

//add a geoJSON layer, grabbing GeoJSON data
d3.json(airportData).then(function(data) {
    //creating a GeoJOSN layer with retrieved data
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup(`<h2> Airport Code: ${feature.properties.faa}</h2> <h3>Airport Name: ${feature.properties.name}</h3>`);
        }
    }).addTo(map);
});



