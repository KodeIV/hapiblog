var Hapi = require("hapi");
var joi = require("joi");
var fs = require ('fs');
var Path = require('path'); 

var routes = require("./routes/routes.js");

var server = new Hapi.Server(+process.env.PORT, '0.0.0.0');

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


