var results;
var mongodb = require ('mongodb');
//var entry ={"id": 5, "date": "21102104", "name": "Naomi", "text":"Jade stare"};
var joi = require("joi");


module.exports = {

 insertComment: function(request, reply) {
            var db = request.server.plugins['hapi-mongodb'].db;

            db.collection('Comments')
		          .find()
              .sort({"_id": -1}).limit(6)
              .toArray(function(err, docs) {
                  console.log(docs);
                  reply(docs);

              });

		},
	}
