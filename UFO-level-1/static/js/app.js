var tableData = data;
var tbody = d3.select("tbody"); 

/* Appending rows to table */ 

tableData.forEach((siting) => {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


/* Filtering functionality begins here */ 

var button = d3.select("#filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "comments"];
var filterDateTime = d3.select("#datetime");