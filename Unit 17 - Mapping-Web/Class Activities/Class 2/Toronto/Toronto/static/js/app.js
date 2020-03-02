var mapConfig = {
    center: [43.65, -79.38],
    zoom: 11
}

var tileURL = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"

var tileConfig = {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}

var geoJSONurl = 'static/data/Data.geojson'

function colorChooser(area_code) {
    if (area_code <= 5) {
        return "red"
    }
    else if (area_code > 5 && area_code <= 10) {
        return "green"
    }
    else if (area_code > 10 && area_code <= 15) {
        return "orange"
    }
    else if (area_code > 15 && area_code <= 20) {
        return "blue"
    }
    else {
        return "pink"
    }
};

var map = L.map("map", mapConfig)
var mapLayer = L.tileLayer(tileURL, tileConfig).addTo(map)
d3.json(geoJSONurl, function(data) {
    L.geoJSON(data, {
        style: function(feature) {
            return {
                color: "white",
                fillColor: colorChooser(feature.properties.AREA_SHORT_CODE),
                fillOpacity: 0.5,
                weight: 1.5
              };
        }, 
        onEachFeature : function (feature, layer) {
                layer.on({
                    mouseover: function(event) {
                        layer = event.target, 
                        layer.setStyle({
                            fillOpacity: 0.75
                        });
                    }, 
                    doubleclick: function(event) {
                        //map.fitBounds(event.target.getBounds());
                        map.zoomOut();
                    },
                    click: function (event) {
                        map.zoomIn();
                    },
                    mouseout: function(event) {
                        layer = event.target, 
                        layer.setStyle({
                            fillOpacity: 0.5
                        })
                    }
                });
                layer.bindPopup("<h1>" + feature.properties.AREA_DESC + "</h1><hr><h2>" + feature.properties.AREA_TYPE + "</h2>");
        }
    }).addTo(map);
});
