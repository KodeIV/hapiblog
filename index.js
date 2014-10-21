var Hapi = require("hapi");
var joi = require("joi");
var routes = require("./routes/routes.js");
var server = new Hapi.Server("localhost", 8000);
module.exports = server;


routes.forEach(function (route){
	server.route(route);
});

var viewpoints = {
    engines: {
        jade: require("jade")
    },
	path: "./views"
}

server.views(viewpoints);

if(!module.parent){
	server.start(function() {
    	console.log("Hapi server started @", server.info.uri);
	});
}