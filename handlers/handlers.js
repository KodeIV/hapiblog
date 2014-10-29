var results;
var mongodb = require ('mongodb');
//var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};
var joi = require("joi");

var serverConfig = {
		cache: require ('catbox-memory')
	};

module.exports = {


	home: function(request, reply) {
          var doc;
          var db = request.server.plugins['hapi-mongodb'].db;

            db.collection('DevOps')
              .find()
              .sort({"id": -1 })
              .toArray(function(err, docs) {
                  console.log(docs);

                reply.view("blogfront", {
                  "author" : docs
                })
              });

		},

  deleteContent: function(request, reply) {
    var db = request.server.plugins['hapi-mongodb'].db;
    var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

    db.collection('DevOps').remove({"_id" : new ObjectID (request.params.id) },
      function(err, reply) {
        console.log(err);
        reply.redirect("/home")});
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

    })


  },


  getForm: function (request, reply) {
        reply.view ("form", {

        })
  },

  editArticle: function (request, reply) {
    reply.view("editForm", {

    })

},

  authenticate: function (request, reply) {

                // Perform any account lookup or registration, setup local session,
                // and redirect to the application. The third-party credentials are
                // stored in request.auth.credentials. Any query parameters from
                // the initial request are passed back via request.auth.credentials.query.
                return reply.redirect('/home');
            }
  };
