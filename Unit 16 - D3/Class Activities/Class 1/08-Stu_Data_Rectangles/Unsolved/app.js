// Data which we will be using to build our rectangle
var booksReadThisYear = [15,26,23,76];
var rectWidth = 100;
// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var selection = d3.select("#svg-area").append("svg")
    .attr("height",400)
    .attr("width",600)

selection.selectAll("rect").data(booksReadThisYear)
    .enter()
    .append("rect")
    .attr("height",function(d){

        return d *10;
    })
    .attr("width", rectWidth)
    .attr("x", function(d, i) {
        return i * rectWidth;
    })
    .attr("y", function(d, i) {
        return 400 - d * 10; 
    })

// Append a rectangle and set its height in relation to the booksReadThisYear value

