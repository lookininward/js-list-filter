function filterProducts() {

	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById('productFilter');
	filter = input.value.toUpperCase();
	ul = document.getElementById('productList');
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

function filterTeamMembers() {

	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById('teamFilter');
	filter = input.value.toUpperCase();
	ul = document.getElementById('teamList');
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

function filterTeamMembers_Table() {

	// Declare variables
	var input, filter, table, tr, td, i;
	input = document.getElementById('teamFilterTable');
	filter = input.value.toUpperCase();
	table = document.getElementById('teamList2');
	tr = table.getElementsByTagName('tr');

	// Loop through all list items, hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName('td')[0];
		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
	}
};