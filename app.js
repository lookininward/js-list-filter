var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});


// Establish Connection with Database
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'l@unchdetected!',
	database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});

connection.end();