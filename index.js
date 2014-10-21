var Hapi = require("hapi");
var joi = require("joi");
var viewpoints = {
    engines: {
        jade: require("jade")
    },
	path: "./views"
}
var server = new Hapi.Server(8080, "localhost");

server.views(viewpoints)

server.start(function() {
    console.log("Hapi server started @", server.info.uri);

    server.route({
	    path: "/hello",
	    method: "GET",
	    handler: function(request, reply) {
	        
	        //var names = request.params.name.split("/");
	        reply.view("hello", {
	            first: "Dan",
	            last: "Sofer",
	            mood: "neutral",
	            colour: "green"
	        });
	    }
	});
});
