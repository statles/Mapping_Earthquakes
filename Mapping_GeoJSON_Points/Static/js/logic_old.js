// Add console.log to check to see if our code is working.
console.log("working");

//initialize map
//set coordinates and zoom level
var map = L.map('mapid').setView([30,30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//add GeoJSON data
let sanFranAirport = {
    "type":"FeatureCollection","features": [{
        "type":"Feature",
        "properties":{
            "id":"3469",
            "name":"San Francisco International Airport",
            "city":"San Francisco",
            "country":"United States",
            "faa":"SFO",
            "icao":"KSFO",
            "alt":"13",
            "tz-offset":"-8",
            "dst":"A",
            "tz":"America/Los_Angeles"
        },
        "geometry":{
            "type":"Point",
            //coordinates are in reverse order, because GeoJSON grabs longitude before latitude
            "coordinates": [-122.375,37.61899948120117]
        }
    }]
};

//accessing airport data
let airportData = "https://raw.githubusercontent.com/statles/Mapping_Earthquakes/main/majorAirports.json"

//add a geoJSON layer, grabbing GeoJSON data
L.geoJSON(sanFranAirport, {
    //turn each feature into a marker on the map
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup(`<h2>${feature.properties.name}</h2> <h3>${feature.properties.city}, ${feature.properties.country}</h3>`);
    }
}).addTo(map);

//the pointToLayer function
//L.geoJSON(data, {
    //pointToLayer: function(feature, latlng) {
        //return L.marker(latlng);
    //}
//});

//add a GeoJSON feature using onEachFeature method
L.geoJSON(sanFranAirport, {
    //turn each feature into a marker on the map
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup(`<h2>Airport Code: ${feature.properties.faa}</h2> <h3>Airport Name: ${feature.properties.name}</h3>`);
    }
}).addTo(map);

