
var express = require('express');						
var app = express(); 
var http = require('http').Server(app); 
app.use(express.static(__dirname + '/public'));
// This is express.
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
// This is nodes http from line 5.
http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});

// ====================================================================================

// // Create a simple server that will allow us to serve up our files
// // and pass data using HTTP (Hypertext Transfer Protocol):
// // Takes the whole express module and loads it into an "express" variable: 
// // Loads express as a program. Saving it to a varaible called express. (Require is loading express and assigning a variable)						
// var express = require('express'); 

// // Saves the express method to a variable called "app" || Add () to make express a function

// var app = express();

// // takes the http and runs a server with this module using variables/functions/traits setup of the express module
// var http = require('http').Server(app);

// // Tells node where to find static files || Loads everything into the public folder.
// // Concatenates the main directory and adds index it to it, then tells express this will be a static location where it can find all files
// app.use(express.static(__dirname + '/public')); 

// // This is express.
// // Serves up the index.html file
// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });

// // (process.env.PORT)> sets up a room and a door(port)
// // Runs on a local port
// // This is nodes http from line 5.
// http.listen(process.env.PORT || 3000, function(){

// 	console.log('listening on *:3000');


// });

