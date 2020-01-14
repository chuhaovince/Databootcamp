// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.

function filterPop(pop) {
    return pop.Increase_from_2016 >15000;
}

// 2. Use filter() to pass the function as its argument
var filterpopoutput = top15Cities.filter(filterPop);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filterpopoutput);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var cities = filterpopoutput.map(city => city.City);

//  Check your filtered cities
console.log(cities);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var population = filterpopoutput.map(pop => pop.population);

//  Check the populations of your filtered cities
console.log(population);
// 5. Create your trace.
trace = {
    x : cities,
    y : population,
    type : "bar"
}

layout = {
    title : "city vs pop",
    xaxis : {title : "city"},
    yaxis : {title : "population"}
}
// 6. Create the data array for our plot
data = [trace]

// 7. Define our plot layout
Plotly.newPlot("bar-plot",data,layout)

// 8. Plot the chart to a div tag with id "bar-plot"
