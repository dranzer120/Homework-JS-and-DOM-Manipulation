// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");

  button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    tbody.html("");

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  })
