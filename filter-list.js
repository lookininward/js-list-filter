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
		
		output = "<ul id='listOfNames'>";
		for (var key in items) {
			output += '<li><a href="#">' + items[key].name + " " + items[key].age + '</a></li>';
		}
		output += "</ul>";

		document.getElementById('update').innerHTML = output;
}



// Initialize a function when there is input into the search bar
document.getElementById('teamFilter').onkeyup = captureInput;

// Hold the search bar input as a global variable
var filter = "";

// Capture the search bar input
function captureInput() {
	var input;
	input = document.getElementById('teamFilter');
	filter = input.value.toUpperCase();
	console.log(filter);

	filterProducts();
}


// Use the input to filter through the generated table
function filterProducts() {

	// Declare variables
	var ul, li, a, i;

	ul = document.getElementById('listOfNames');
	li = ul.getElementsByTagName('li');

	// Loop through all list items, hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
};

// function filterTeam() {

// 	// CreateList();
// }







// Next Step
// Now the JSON data (all of it) gets parsed and sent out in the request.send,
// I want it to filter the data when its still inside the ajax request (taking the input); then sent out
// AJAX request holds all the parsed data
// parsing of the data should happen through CreateList(); instead of outputting it then parsing it, parse it then output it
