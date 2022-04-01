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
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

//use control layers to control the map
L.control.layers(baseMaps).addTo(map);

//accessing airport data
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//add a geoJSON layer, grabbing GeoJSON data
d3.json(earthquakes).then(function(data) {
    //this function returns the style data for each earthquake
    //the magnitude is passed as a function to calculate the radius
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.properties.mag),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
    //this function will color the circle based on the magnitude
    function getColor(magnitude) {
        if (magnitude > 5) {
            return "#ea2c2c";
        } else if (magnitude > 4) {
            return "#ea822c";
        } else if (magnitude > 3) {
            return "#ee9c00";
        } else if (magnitude > 2) {
            return "#eecc00";
        } else if (magnitude > 1) {
            return "#d4ee00";
        } else {
            return "#98ee00";
        }
    }
    //this function calculates the radius
    function getRadius(magnitude) {
        if(magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
} 
    //creating a GeoJOSN layer with retrieved data
    L.geoJSON(data, {
        //return each feature as a cicle marker on the map
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        //set style for each circle marker
        style: styleInfo,
        //create a popup for each circleMarker to display magnitude and location
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
        }
    }).addTo(map);
});



