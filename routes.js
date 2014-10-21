var handlers = require("./handlers/handlers.js"); 

 module.exports = {


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
}