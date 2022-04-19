var express = require('express');
var engines = require('consolidate');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.get('/',function(req,res){
    mongoose.connect('mongodb+srv://JR-test:srikanya@cluster0test.oi8te.mongodb.net/test',function(err,db){
        if(err){
            console.log('Error',err);
        }
        else{
            db.collection('todo').find().toArray(function(err,docs){
        res.render('index',{'jobs':docs});
            })
        }
    });
});

app.post('/add',function (req,res) {

		var a = req.body.joba;
        var b = req.body.datea;
        var c = req.body.timea;

        var obj = {'job':a,"date":b,"time":c};
        
        mongoose.connect("mongodb+srv://JR-test:srikanya@cluster0test.oi8te.mongodb.net/test",function(err,db){
            if(err){
                console.log(err);
            }
            
            else{
                console.log(obj);
                db.collection('todo').insertOne(obj);
            }
        });
    
	res.redirect('/');

});
/*
app.get('/add',function(req,res){
    var job = req.body.job;
    var date = req.body.date;
    var time = req.body.time;
    
    var obj = {'job':job,'date':date,'time':time};
    console.log(req.body.job);
    console.log(obj);
})*/

app.listen(1337,function(){
    console.log('Listening to port 1337');
})
