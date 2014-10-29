var Hapi = require("hapi");
var joi = require("joi");
var Path = require('path'); 
var routes = require("./routes/routes.js");
var routes2 = require("./routes/routes2.js");
var bell = require("bell");
var hapiAuthCookie = require("hapi-auth-cookie");

var pack = new Hapi.Pack();
var server = pack.server(8080, "localhost", {
   debug: {
       request: ['error']
   }
});

var server2 = pack.server(8081, "localhost", {
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


server.pack.register(
  {
    plugin: require('hapi-mongodb'),
    options: dbOpts
  }, 

  function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
  }
);

server.pack.register(require('bell'), function (err) {

    server.auth.strategy('facebook', 'bell', {
        provider: 'facebook',
        password: 'hapiauth',
        clientId: '562715117207744',
        clientSecret: 'f33a41096a843319154ccb80ece9104e',
        isSecure: false     // Terrible idea but required if not using HTTPS
    });
});

server.pack.register(require('hapi-auth-cookie'), function (err) {  
    if (err) {
        throw err;
    }

    // Set our strategy
    server.auth.strategy('session', 'cookie', {
        password: 'hapiauth', // cookie secret
        cookie: 'session', // Cookie name
        redirectTo: false, // Let's handle our own redirections
        isSecure: false, // required for non-https applications
        ttl: 24* 60 * 60 * 1000 // Set session to 1 day
    });
  })
    
server.ext('onRequest', function (request, next) {
        console.log(request.path, request.query);
        next();
    });

var viewpoints = {
                    engines: {
                      jade: require("jade")
                    },
                  	path: "./views"
                  }
server.views(viewpoints)

//module.exports = server;

if(!module.parent){
	pack.start(function() {
    	console.log("Hapi server started @", server.info.uri);

	});
}
   
server.route(routes);
server2.route(routes2);



// var loggingOptions = require('./test/logOptions.js');

// pack.register({
//     plugin: require('good'),
//     options: loggingOptions
// }, function(err) {
//     if (err){
//         console.log(err);
//         return;
//     }
// });



