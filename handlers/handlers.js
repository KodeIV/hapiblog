var results;
var mongodb = require('mongodb');
//var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};
var joi = require("joi");
var serverConfig = {
         cache: require('catbox-memory')
     };


module.exports = {

     home: function (request, reply) {
         var doc;
         var db = request.server.plugins['hapi-mongodb'].db;

         db.collection('DevOps')
              .find()

              .sort({"_id": -1 }).limit(6)
              .toArray(function(err, docs) {

                reply.view("blogfront", {
                    "author" : docs
                });
             });

	   },

     deleteContent: function(request, reply) {
         var db = request.server.plugins['hapi-mongodb'].db;
         var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

         db.collection('DevOps').remove({"_id" : new ObjectID (request.params.id) },
             function (err, reply) {
                 console.log(err);
                 reply.redirect("/home");
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
        reply.redirect("/home");
      });

  },

  publicfiles:
        {
          directory: {
              path: 'public',
              listing: false,
              index: false
          }
        },


  getSpecificPost: function(request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;
    var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

    db.collection('DevOps')
      .findOne({  "_id" : new ObjectID (request.params.id) }, function(err, result) {

          if (err) return reply(Hapi.error.internal('Internal MongoDB error', err));
          console.log(result);

          reply.view("individual", {
            "blogpost" : result
          });

    });


  },


  getForm: function (request, reply) {
        reply.view ("form", {

        });
  },

  editArticle: function (request, reply) {
    reply.view("editForm", {

    });

},

  authenticate: function (request, reply) {
                return reply.redirect('/');
  },


  commentToDb: function (request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;
        db.collection('Comments').insert(
        {
          comment: request.payload.comments,
          author: request.payload.author,
          individualID: request.payload.individualID
        },

      function(err, data) {
        reply.redirect("/home");
      }

        );

  },

  search: function (request, reply) {
    var query = request.payload.query;
      // query = query.toLowerCase(/a-z, A-Z/);
    var db = request.server.plugins['hapi-mongodb'].db;
        db.collection('DevOps')
        .find({"$or":[{"author":{"$regex": query}}, {"content":{"$regex": query}},
                      {"title":{"$regex":query}}]})
        .sort({"_id": -1 }).limit(6)
        .toArray(function(err, docs) {
            console.log(docs)
        if (docs.length <1){
          return reply.view("nothingfound")
        }
          reply.view("blogfront", {
              "author" : docs
          });
       });


  }


  };
