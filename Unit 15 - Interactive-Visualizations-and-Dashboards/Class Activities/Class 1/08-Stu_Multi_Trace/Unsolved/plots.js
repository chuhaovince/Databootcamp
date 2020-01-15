console.log(data);


var trace1 = {
    x : data.map(god => god.pair),
    y : data.map(god => god.greekSearchResults),
    text : data.map(god => god.greekName),
    name : "greek",
    type : "bar"
};

var trace2 = {
    x : data.map(god => god.pair),
    y : data.map(god => god.romanSearchResults),
    text : data.map(god => god.romanName),
    name : "roman", 
    type : "bar"
};

var data = [trace1, trace2];

layout = {

};

Plotly.newPlot("plot", data, layout);