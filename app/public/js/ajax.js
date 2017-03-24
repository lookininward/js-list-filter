var request;

// Support for older browsers
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}

// Gather Data
request.open('GET', 'json/data.json');

request.onreadystatechange = function() {

	if ((request.readyState===4) && (request.status===200)) {
		
		var items = JSON.parse(request.responseText);
		
		// List
		// var output = '<ul id="teamList">';
		// for (var key in items) {
		// 	output += '<li><a>' + items[key].name + ' ' + items[key].age + '</a></li>';
		// }
		// output += '</ul>';

		// document.getElementById('update').innerHTML = output;

		// // Table
		// var output2 = '<table id="teamList2">';
		// for (var key in items) {
		// 	output2 += '<tr><td>' + items[key].name + ' ' + items[key].age + '</td></tr>';
		// }
		// output2 += '</table>';

		// document.getElementById('update2').innerHTML = output2;

		// List - Alternate
		// var output3 = '<ul id="teamList3">';
		// for (var key in items) {
		// 	output3 += '<li><a>' + items[key].name + ' ' + items[key].age + '</a></li>';
		// }
		// output3 += '</ul>';

		// document.getElementById('update3').innerHTML = output3;
	}
}
request.send();