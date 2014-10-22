var Hapi = require("hapi");
var joi = require("joi");
var fs = require ('fs');
// var mongodb = require ('mongodb');
// var MongoClient = mongodb.MongoClient;
// var dbKIV = "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo";

var routes = require("./routes/routes.js");
//var results = "";


var server = new Hapi.Server(8080, "localhost");

var viewpoints = {
    engines: {
        jade: require("jade")
    },
	path: "./views"
}

module.exports = server;

server.views(viewpoints)

// function pullPosts() {
//     MongoClient.connect(dbKIV, function (err, db) {
//       var collection = db.collection('users');
//       collection.find().sort({"id": -1 }).toArray(function(err, docs) {
//         console.log(docs);
//         results = docs;
//       });
//     });
//   }
//   pullPosts()
  //var dateToWrite = newDate();

  // var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};

  // function storePost () {
  //   //connect to our db
  //   MongoClient.connect(dbKIV, function(err, db) {
  //   // operate the on the collection named "DevOps"
  //   var collection = db.collection('DevOps');
  //   collection.insert(entry, function(err, data) {

  //     if(err) console.log(err);
  //     });

  //   })
  // }

if(!module.parent){
	server.start(function() {
    	console.log("Hapi server started @", server.info.uri);
	});
}
   
server.route(routes);


