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
		
		var output = '<ul id="teamList">';
		for (var key in items) {
			output += '<li><a>' + items[key].name + ' ' + items[key].age + '</a></li>';
		}
		output += '</ul>';

		document.getElementById('update').innerHTML = output;
	}
}
request.send();