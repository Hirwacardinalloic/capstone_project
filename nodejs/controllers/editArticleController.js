
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('../models/Article');
var urlEncodedPasser = bodyParser.urlencoded({extended: false});
mongoose.connect('mongodb+srv://loic:man.united@cluster0.o6edf.mongodb.net/capstone_project?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true});



module.exports = function(server){
    server.get('/editArticle', (req, res)=>{
        try{
            Article.find({}, function(err, data){
                
                res.render('editArticlePage', {articles: data});
                
            });
            

        }catch(err){
            res.json({message: err});
        }
    })
}