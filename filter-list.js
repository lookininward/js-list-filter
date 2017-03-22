// AJAX REQUEST
// Parse data.json
function AJAXrequest() {
	var request;

	// Support for Older Browsers
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}

	// Gather Data
	request.open('GET', 'json/data.json');

	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			var items = JSON.parse(request.responseText);
			console.log(items[1].name);
			
			// Pass the parsed items [JSON array] into the CreateList() function
			CreateList(items);
		}
	}
	request.send();
}

AJAXrequest();

// Build the table
// Create List
function CreateList(items) {

		console.log(items[1]);
		
		output = "<table id='listOfNames'>";
		for (var key in items) {
			output += '<tr>'
			output += '<td>' + items[key].name + '</td>';
			output += '<td>' + items[key].order_no + '</td>';
			output += '<td>' + items[key].diameter + '</td>';
			output += '<td>' + items[key].length + '</td>';
			output += '<td>' + items[key].shank_diameter + '</td>';
			output += '<td>' + items[key].overall_length + '</td>';
			output += '<td>' + items[key].price + '</td>';
			output += '</tr>';
		}
		output += "</table>";

		document.getElementById('update').innerHTML = output;
}

// Initialize a function when there is input into the search bar
document.getElementById('productFilter').onkeyup = captureInput;

// Hold the search bar input as a global variable
var filter = "";

// Capture the search bar input
function captureInput() {
	var input;
	input = document.getElementById('productFilter');
	filter = input.value.toUpperCase();
	console.log(filter);

	filterProducts();
}

// Use the input to filter through the generated table
function filterProducts() {

	// Declare variables
	var table, tr, td, i;

	table = document.getElementById('listOfNames');
	tr = table.getElementsByTagName('tr');

	// Loop through all list items, hide those who don't match the search query
	// currently only filtering by the first TD, want to filter by all
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName('td')[0];
		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
	}
};

// Next Step
// Now the JSON data (all of it) gets parsed and sent out in the request.send,
// I want it to filter the data when its still inside the ajax request (taking the input); then sent out
// AJAX request holds all the parsed data
// parsing of the data should happen through CreateList(); instead of outputting it then parsing it, parse it then output it

// Implement Express + Database
// Switch from JSON data to database
