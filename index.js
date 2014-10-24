var Hapi = require("hapi");
var joi = require("joi");
var Path = require('path'); 

var routes = require("./routes/routes.js");

var server = new Hapi.Server(8080, "localhost");
var dbOpts = {
    "url": "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};
server.pack.register({
    plugin: require('hapi-mongodb'),
    options: dbOpts
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

var viewpoints = {
                    engines: {
                      jade: require("jade")
                    },
                  	path: "./views"
                  }

module.exports = server;

server.views(viewpoints)

if(!module.parent){
	server.start(function() {
    	console.log("Hapi server started @", server.info.uri);

	});
}
   
server.route(routes);


