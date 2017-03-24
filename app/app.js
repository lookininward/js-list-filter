var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Routes 
// Static Directory to access css, js, etc.
app.use(express.static('app/public'));
app.use(require('./routes/index')); // correctly routes to routes/index.js; issues with rendering index.html from there on

// Run Express Server
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

