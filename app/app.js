var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('app/public')); // serves up the index.html in public folder
app.use(require('./routes/index')); // correctly routes to routes/index.js; issues with rendering index.html from there on

var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

// Establish Connection with Database
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host : '127.0.0.1',
// 	user : 'root',
// 	password : 'l@unchdetected!',
// 	database : 'my_db'
// });

// connection.connect();

// // Query and post result to console
// // connection.query('SELECT * FROM products', function(error, results, fields) {
// // 	if (error) throw error;
// // 	console.log('Results: ', results[0]);
// // });

// connection.end();


console.log(__dirname);

