// from data.js
var tableData = data;

// INSTRUCTIONS
//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search 
//through the date/time column to find rows that match user input.
// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(data);

data.forEach((alient_sighting) => {
  var row = tbody.append("tr");
  Object.entries(alient_sighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});








// YOUR CODE HERE!
