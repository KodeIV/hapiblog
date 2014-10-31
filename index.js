var Hapi = require("hapi");
var joi = require("joi");
var Path = require('path');
var routes = require("./routes/routes.js");
var bell = require("bell");
var hapiAuthCookie = require("hapi-auth-cookie");

var pack = new Hapi.Pack();
var server = pack.server(+process.env.PORT, '0.0.0.0', {
        cors: true,
        debug: {
            request: ['error']
        }
    });

var dbOpts = {
    "url": "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};

pack.register(
{
  plugin: require('hapi-mongodb'),
  options: dbOpts
},
function (err){
  if (err) {
    console.log(err);
    throw err;
  }
});

  pack.register([
    { plugin: require('bell') },
    { plugin: require('hapi-auth-cookie') },
    { plugin: require('./plugins/auth') }], 
    function(err) {
        if (err) throw err;
    }
  );



server.ext('onRequest', function (request, next) {
    console.log(request.path, request.query);
    next();
});

var viewpoints = {
        engines: {
            jade: require("jade")
        },
        path: "./views"
    };

server.views(viewpoints);

//module.exports = server;

if (!module.parent) {
    pack.start (function() {
      console.log("Hapi server started @", server.info.uri);

    });
}

server.route(routes);
