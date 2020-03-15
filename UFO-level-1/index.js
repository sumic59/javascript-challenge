// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");


// Set filteredAddresses to dataSet initially
var filteredTable = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredTable.length; i++) {
    // Get get the current address object and its fields
    var address = filteredTable[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var k = 0; k < fields.length; k++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[k];
      var $cell = $row.insertCell(k);
      $cell.innerText = address[field];
    }
  }
}

// Render the table for the first time on page load
renderTable();

//Add pagination to the table to show 10 -100 entries per page

$(document).ready(function() {
  $('#table').DataTable();
});