var express = require('express');

var mainController = require('./controllers/mainController');
var articleController = require('./controllers/articleController');
var editArticleController = require('./controllers/editArticleController');
const methodOverride = require('method-override');
var server = express();
//set up template engine
server.set('view engine', 'ejs');

//static files
server.use(express.static('./public'));
server.use(methodOverride('_method'));

//fire the controllers
mainController(server);
articleController(server);
editArticleController(server);

//listen to a port
server.listen(3000);
console.log('You are listening to 3000');