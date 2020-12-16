var tableData = data;
var tbody = d3.select("tbody"); 
var columns = ["datetime", "city", "state", "country", "shape", "comments"];


/***************************/
/* Appending rows to table */ 
/***************************/

tableData.forEach((siting) => {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

/********************************************/
/* Form filtering functionality begins here */ 
/********************************************/

var button = d3.select("#filter-btn");
var form = d3.select("#form"); 

// Creating Event Handler 
button.on("click", onButtonClick);
form.on("submit", onButtonClick);


// Completing event handler function for the form 
function onButtonClick() {
  
  d3.event.preventDefault(); 

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value").trim();
  console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);

  tbody.html("");

  let response = {
    filteredData
  }

  if(response.filteredData.length !== 0)
  {
    filteredData.forEach((match) => {
      var row = tbody.append("tr");
      Object.entries(match).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  else 
  {
    tbody.append("tr").append("td").text("No matches available.");
  }
}

resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
}); 