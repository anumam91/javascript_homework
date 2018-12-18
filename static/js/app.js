// INSTRUCTIONS
//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.


// 1. Get data from data.js
var tableData = data;

//2. Connect to the table in the html 
var tbody = d3.select("tbody");
console.log(data);


//3. Set up the table
function createTable(data){
  tbody.html("");
  data.forEach((alien_sighting) => {
    var row = tbody.append("tr");
    Object.entries(alien_sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

//5. Set up table filter function
d3.selectAll("#filter-btn").on("click", filterData); 

function filterData(){
  d3.event.preventDefault(); 
  var EnterDate = d3.select("#datetime").property("value"); 
  if (EnterDate){
    newtableData = tableData.filter(row => row.datetime === EnterDate); 
}
createTable(newtableData); 
}


//6. When website first opens, all data should appear on table:
createTable(tableData); 

