// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

//initialize map
//set coordinates and zoom level
var map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

//use control layers to control the map
L.control.layers(baseMaps).addTo(map);

//accessing airport data
let torontoHoods = "https://raw.githubusercontent.com/statles/Mapping_Earthquakes/main/torontoNeighborhoods.json"

//add a geoJSON layer, grabbing GeoJSON data
d3.json(torontoHoods).then(function(data) {
    //creating a GeoJOSN layer with retrieved data
    L.geoJson(data, {
        color: 'blue',
        fillColor: 'yellow',
        fillOpacity: '0.2',
        weight: 1,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup(`<h2>Airline: ${feature.properties.AREA_NAME}</h2>`);
        }
    }).addTo(map);
});



