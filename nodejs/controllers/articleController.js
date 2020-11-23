
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('../models/Article');

//connecting to database
mongoose.connect('mongodb+srv://loic:man.united@cluster0.o6edf.mongodb.net/capstone_project?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true});




var urlEncodedPasser = bodyParser.urlencoded({extended: false});

module.exports = function(server){
   
    server.get('/addArticle', function(req, res){
        res.render('addArticle')
    });
    server.post('/addArticle', urlEncodedPasser, function(req, res){
       
        var newArticle = Article(req.body).save().then(data =>{
          
        }).catch(err =>{
            console.log(res.json({message: err}));
        });

    });
    //Update an article from mongo dt

    server.put('/editArticle/:id/edit', urlEncodedPasser, async function(req, res){
        
    });

    //Deleting an article from mongo db

    server.delete('/editArticle/:id', urlEncodedPasser, async function(req, res){
       try{
         await Article.find({_id: req.params.id}).deleteOne(function(err,data){
            res.render('editArticlePage', {articles: data});
        });
        
       }catch(err){
           res.json({message: err});
       } 
    });

};