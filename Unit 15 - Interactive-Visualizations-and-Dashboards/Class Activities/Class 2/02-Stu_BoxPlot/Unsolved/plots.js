// @TODO: YOUR CODE HERE
var newyork = temps.newyork;
var houston = temps.houston;

trace1 = {
    y : newyork,
    type : "box",
    boxpoints : "all",
    name : "Newyork"
};

trace2 = {
    y : houston,
    type : "box",
    boxpoints : "all",
    name : "Houston"
};

layout = {
    title : "temps",
};

data = [trace1, trace2];

Plotly.newPlot("plot",data,layout)