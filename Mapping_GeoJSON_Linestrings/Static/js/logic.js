// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps
let baseMaps = {
    Day_Navigation: light,
    Night_Navigation: dark
};

//initialize map
//set coordinates and zoom level
var map = L.map('mapid', {
    center: [44.0,-80.0],
    zoom: 4,
    layers: [light]
});

//use control layers to control the map
L.control.layers(baseMaps).addTo(map);

//accessing airport data
let torontoData = "https://raw.githubusercontent.com/statles/Mapping_Earthquakes/main/torontoRoutes.json"

//add a geoJSON layer, grabbing GeoJSON data
d3.json(torontoData).then(function(data) {
    //creating a GeoJOSN layer with retrieved data
    L.geoJson(data, {
        color: '#ffffa1',
        weight: 2,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup(`<h2>Airline: ${feature.properties.airline}</h2> <h3>Destination: ${feature.properties.dst}</h3>`);
        }
    }).addTo(map);
});



