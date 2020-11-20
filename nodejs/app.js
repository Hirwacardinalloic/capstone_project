var express = require('express');

var server = express();
//set up template engine
server.set('view-engine', 'ejs');

//static files
server.use(express.static('./public'));
//listen to a port
server.listen(3000);
console.log('You are listening to 3000');