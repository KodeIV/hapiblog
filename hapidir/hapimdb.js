var hapi = require ('hapi');
var joi = require ('joi');
var fs = require ('fs');
var = require ('mongodb');
var MongoClient = mongodb.MongoClient;
var dbKIV = "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo";
// var dbK4 = process.env.MONGOHQ_URL;
var results = "";


//Could delete
//var  toWrite = "";
//var pulled = { "statuses" : []};

  function pullPosts() {
    MongoClient.connect(dbKIV, function (err, db) {
      var collection = db.collection('DevOps');
      collection.find().sort({"id": -1 }).toArray(function(err, docs) {
        console.log(docs);
        results = docs;
      });
    });
  }
  pullPosts()
  //var dateToWrite = newDate();

  var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};

  function storePost () {
    //connect to our db
    MongoClient.connect(dbKIV, function(err, db) {
    // operate the on the collection named "DevOps"
    var collection = db.collection('DevOps');
    collection.insert(entry, function(err, data) {

      if(err) console.log(err);
      });

    })
  }
  //storePost();

var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

  server.route ({
    method: 'GET',
    path: '/',
    config: {
      handler: function(request, reply) {
        reply(results)
      }

    }
  });
  server.start(function(){
    console.log("server is running");
  });
