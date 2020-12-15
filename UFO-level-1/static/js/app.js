// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "comments"];
var filterDateTime = d3.select("#datetime");
var tbody = d3.select("tbody"); 

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });