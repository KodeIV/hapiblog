var fs = require ('fs');
var results;
var mongodb = require ('mongodb');
var MongoClient = mongodb.MongoClient;
var dbKIV = "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo";
var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};

function pullPosts() {
    MongoClient.connect(dbKIV, function (err, db) {
      var collection = db.collection('DevOps');
      collection.find().sort({"id": -1 }).toArray(function(err, docs) {
        console.log(docs);
        results = docs;

      });
    });
  }

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


module.exports = {
	home: function(request, reply) {
		     pullPosts();   
		        //var names = request.params.name.split("/");

		    reply.view("blogfront", {
		       
		       "author" : results
		    })
		}

	// articles:function(request, reply){
	// 		reply('This is the landing page.</br> Post 1.</br> Post 2')
	// 	}

}