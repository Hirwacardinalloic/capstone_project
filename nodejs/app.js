var express = require('express');

var mainController = require('./controllers/mainController');
var articleController = require('./controllers/articleController');
var server = express();
//set up template engine
server.set('view engine', 'ejs');

//static files
server.use(express.static('./public'));

//fire the controllers
mainController(server);
articleController(server);

//listen to a port
server.listen(3000);
console.log('You are listening to 3000');