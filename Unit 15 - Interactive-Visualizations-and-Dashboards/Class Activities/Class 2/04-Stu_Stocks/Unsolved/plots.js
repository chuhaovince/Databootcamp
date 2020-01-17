var apiKey = "xwFaKJefSgzpK45o_Eo6";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

/**
 * Fetch data and build the timeseries plot
 */
function buildPlot() {
  // @TODO: YOUR CODE HERE
  d3.json(url).then(function(data) {
    var trace = {
      x : unpack(data.dataset.data, 0),
      y : unpack(data.dataset.data, 4),
      type : "scatter",
      name : data.dataset.name
    };
    var plot = [trace];
    var layout = {
      title : `stock price of ${data.dataset.dataset_code}`,
      xaxis : {
        title : "Date",
        type : "date"
      }
    };
    Plotly.newPlot("plot",plot,layout);
  })
}

buildPlot();
