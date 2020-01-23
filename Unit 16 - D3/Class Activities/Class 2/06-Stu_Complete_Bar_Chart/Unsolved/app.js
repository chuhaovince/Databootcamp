// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
// YOUR CODE HERE
d3.csv("hours-of-tv-watched.csv").then(function(data){
  var names = data.map(d => d.names);
  aa = data.forEach(function(d) {
    d.hours = +d.hours;
  });
  var hours = data.map(d => d.hours);
  var space = 20;
  var xScaler = d3.scaleBand().domain(names).range([0, chartWidth]);
  var yScaler = d3.scaleLinear().domain(d3.extent(hours)).range([chartHeight-space, 0]);
  var yAxis = d3.axisLeft(yScaler)
  var xAxis = d3.axisBottom(xScaler)
  chartGroup.append("g")
    .attr("transform", `translate(0,${chartHeight})`)
    .call(xAxis);
  chartGroup.append("g")
    .call(yAxis);

  chartGroup.selectAll(".bar")
  .data(hours)
  .enter()
  .append("rect")
  .classed(".bar", true)
  .attr("x", (d, i) => xScaler(names[i]))
  .attr("y", d => yScaler(d))
  .attr("height", d => chartHeight - yScaler(d))
  .attr("width", xScaler.bandwidth() - space)
})

  // Cast the hours value to a number for each piece of tvData


  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)


  // Create a linear scale for the vertical axis.


  // Create two new axes functions passing our scales in as arguments


  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them

  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart
