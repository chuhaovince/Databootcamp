var radius = [{color: "red", radius: 50},
                {color: "black", radius: 40},
                {color: "red", radius: 30},
             {color: "black", radius: 20},
             {color: "red", radius:10}]
var selection = d3.select("body").append("svg")
selection.attr("height", "200px").attr("width", "200px");
var circles = selection.selectAll("circle")
circles.data(radius)
    .enter()
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", function(d) {
        return d.radius;
    })
    .attr("fill", function(d) {
        return d.color
    })
    .attr("stroke", "green")
    .attr("stroke-width", 1)