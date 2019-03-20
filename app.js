var express = require('express');
var mongodb = require('mongodb');
var app = express();
var url = "mongodb://localhost:27017";
var db =""
var MongoClient = require('mongodb').MongoClient;
var dbname = "Welltok";
var collname = "article";
var router = express.Router();
var query ={};
// Initialize connection once
app.listen(3000);
    console.log("Listening on port 3000");


 function mongoconnection(query,res)
{
    mongoConnectc =  MongoClient.connect(url, function(err, database) {
      if(err) throw err;
    
      var db = database.db(dbname);
      db.collection(collname).find(query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      database.close();
      });
    });
}

   
// Reuse database object in request handlers
app.get("/articles", function(req, res) {
  query={};
  mongoconnection(query,res);
  
});

app.get("/article/:id", function(req, res) {
  
   query = {Id: parseInt(req.params.id)};
   mongoconnection(query,res);
  
});