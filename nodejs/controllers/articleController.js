
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database
mongoose.connect('mongodb+srv://loic:man.united@cluster0.o6edf.mongodb.net/capstone_project?retryWrites=true&w=majority',{useNewUrlParser: true});

//create a schema for the article (a blueprint for the article)

var articleSchema = new mongoose.Schema({
    articleTitle: String,
    imageURL: String,
    date: String,
    content: String
});

//Creating a model
var ArticleModel = mongoose.model('articles', articleSchema);


var urlEncodedPasser = bodyParser.urlencoded({extended: false});

module.exports = function(server){
   
    server.get('/addArticle', function(req, res){
        res.render('addArticle')
    });
    server.post('/addArticle', urlEncodedPasser, function(req, res){
        var newArticle = ArticleModel(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });

    server.delete('/article', function(req, res){

    });
};