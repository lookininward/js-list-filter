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

	// document.getElementById('update').innerHTML = "Hello";



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