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


// Completing event handler function for the form 
function onButtonClick() {
  
  d3.event.preventDefault(); 

  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");


  var inputDateValue = inputDate.property("value").trim();
  console.log(inputDateValue);

  var inputCityValue = inputCity.property("value").toLowerCase().trim();
  console.log(inputCityValue);

  var inputStateValue = inputState.property("value").toLowerCase().trim();
  console.log(inputStateValue);

  var inputCountryValue = inputCountry.property("value").toLowerCase().trim();
  console.log(inputCountryValue);

  var inputShapeValue = inputShape.property("value").toLowerCase().trim();
  console.log(inputShapeValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && 
                                      tableData.state === inputStateValue && tableData.country === inputCountryValue 
                                      && tableData.shape === inputShapeValue);
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
