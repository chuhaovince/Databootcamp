//var arr = [50, 55, 53];
// // d3.select("ul").selectAll("li").each(function (d,i) {
// //     console.log("element", this);
// //     console.log("data", d);
// //     console.log("index", i);
// // })
// // d3.select("ul").selectAll("li").data(arr);
// // console.log(d3.select("ul").selectAll("li").data());
// // d3.select("ul").selectAll("li").each(function (d,i) {
// //     console.log("element", this);
// //     console.log("data", d);
// //     console.log("index", i);
// // })
// // d3.select("ul").selectAll("li")
// //     .data(arr)
// //     .enter()
// //     .append("li")
// //     .text(function(d) {
// //         return d;
// //         });
// //////////////////////-------------------------------
var arr = [12, 14, 37, 39, 57]
// d3.select("ul")
//     .selectAll("li")
//     .data(arr)
//     .text(function(d) {
//         return d
//     });
// d3.select("ul")
//     .selectAll("li")
//     .data(arr)
//     .enter()
//     .append("li")
//     .text(function(d) {
//         return d
//     });
// var selection = d3.select("ul").selectAll("li");
// var dataSelection = selection.data(arr)
// dataSelection.text(d => d)
// dataSelection.enter().append("li").text(d => d)
/////-------------------
var arr = [55, 51, 57, 87, 91, 100]
var selection = d3.select("ul").selectAll("li");
var dataSelection = selection.data(arr)
dataSelection.text(d => d);
dataSelection.enter().append("li").text(d => d);
dataSelection.exit().remove();