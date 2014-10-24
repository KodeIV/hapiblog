var results;
var mongodb = require ('mongodb');
//var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};
var joi = require("joi");


module.exports = {

	home: function(request, reply) {
            var db = request.server.plugins['hapi-mongodb'].db;

            db.collection('DevOps')
		          .find()
              .sort({"id": -1 })
              .toArray(function(err, docs) {
                  console.log(docs);
                reply(docs) 
                results = docs;
              });

		    // reply.view("blogfront", {
		       
		    //    "author" : results
		    // })

		}, 

    deleteContent: function(request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;
    var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

    db.collection('DevOps').remove({"_id" : new ObjectID (request.params.id) }, function (err){
    if (err) return reply(Hapi.error.internal('Internal MongoDB error', err));
    reply("Record Deleted");
    });
    },

  publicfiles: 
        {
          directory: {
              path: 'public',
              listing: true
          }
        },


  getSpecificPost: function(request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;
    var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

    db.collection('DevOps')
      .findOne({  "_id" : new ObjectID (request.params.id) }, function(err, result) {
        
          if (err) return reply(Hapi.error.internal('Internal MongoDB error', err));
          console.log(result);
          reply(result);

    });

  },

  insertNewPost: function(request, reply){
    var db = request.server.plugins['hapi-mongodb'].db;
    db.collection('DevOps').insert({
      title: request.payload.title,
      author: request.payload.author, 
      content: request.payload.content
    },
      
      function(err, data) {
        reply.redirect("/home")});

  },

  getForm: function (request, reply) {
        reply.view ("form", {

        })
  }
  

};


  // function storePost () {
  //   //connect to our db
  //   MongoClient.connect(dbKIV, function(err, db) {
  //   // operate the on the collection named "DevOps"
  //   var collection = db.collection('DevOps');
  //   
  //   })
  // };

