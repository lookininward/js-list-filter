// document.getElementById('productFilter').onkeyup = filterProducts;
// document.getElementById('teamFilter').onkeyup = filterTeamMembers;
// document.getElementById('teamFilterTable').onkeyup = filterTeamMembers_Table;
document.getElementById('teamFilterAlternate').onkeyup = filterTeamMembersAlternate;

// function filterProducts() {

// 	// Declare variables
// 	var input, filter, ul, li, a, i;
// 	input = document.getElementById('productFilter');
// 	filter = input.value.toUpperCase();
// 	ul = document.getElementById('productList');
// 	li = ul.getElementsByTagName('li');

// 	// Loop through all list items, hide those who don't match the search query
// 	for (i = 0; i < li.length; i++) {
// 		a = li[i].getElementsByTagName('a')[0];
// 		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
// 			li[i].style.display = "";
// 		} else {
// 			li[i].style.display = "none";
// 		}
// 	}
// };

// function filterTeamMembers() {

// 	// Declare variables
// 	var input, filter, ul, li, a, i;
// 	input = document.getElementById('teamFilter');
// 	filter = input.value.toUpperCase();
// 	ul = document.getElementById('teamList');
// 	li = ul.getElementsByTagName('li');

// 	// Loop through all list items, hide those who don't match the search query
// 	for (i = 0; i < li.length; i++) {
// 		a = li[i].getElementsByTagName('a')[0];
// 		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
// 			li[i].style.display = "";
// 		} else {
// 			li[i].style.display = "none";
// 		}
// 	}
// };

// function filterTeamMembers_Table() {

// 	// Declare variables
// 	var input, filter, table, tr, td, i;
// 	input = document.getElementById('teamFilterTable');
// 	filter = input.value.toUpperCase();
// 	table = document.getElementById('teamList2');
// 	tr = table.getElementsByTagName('tr');

// 	// Loop through all list items, hide those who don't match the search query
// 	for (i = 0; i < tr.length; i++) {
// 		td = tr[i].getElementsByTagName('td')[0];
// 		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
// 			tr[i].style.display = "";
// 		} else {
// 			tr[i].style.display = "none";
// 		}
// 	}
// };



// function filterTeamMembersAlternate() {

// 	// Declare variables
// 	var input, filter, ul, li, a, i;
// 	input = document.getElementById('teamFilterAlternate');
// 	filter = input.value.toUpperCase();
// 	ul = document.getElementById('teamList3');
// 	li = ul.getElementsByTagName('li');

// 	// Loop through all list items, hide those who don't match the search query
// 	for (i = 0; i < li.length; i++) {
// 		a = li[i].getElementsByTagName('a')[0];
// 		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
// 			li[i].style.display = "";
// 		} else {
// 			li[i].style.display = "none";
// 		}
// 	}
// };


var filter = "";

function filterTeamMembersAlternate() {
	var input;
	input = document.getElementById('teamFilterAlternate');
	filter = input.value.toUpperCase();

	CreateList();
}

// Create List
function CreateList(items) {

		console.log(items[1]);
		

		output = "<ul id='listOfNames'>";
		for (var key in items) {
			output += '<li><a href="#">' + items[key].name + '</a></li>';
		}
		output += "</ul>";

		document.getElementById('update').innerHTML = output;
}


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


// Next Step
// Now the JSON data (all of it) gets parsed and sent out in the request.send,
// I want it to filter the data when its still inside the ajax request (taking the input); then sent out
