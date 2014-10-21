//var handlers = require("./handlers/handlers.js"); 

 module.exports = [
// route for landing page
server.route({
	method:'GET',
	path:'/articles/',
	handler: function(request, reply){
		reply('This is the landing page.</br> Post 1.</br> Post 2')
	}
}),


server.route({
	method:'GET',
	path:'/articles/{i}/'
	handler: function(request, reply){
		reply()
	}
}),

server.route({
	method:'GET',
	path:'/articles/new/'
	handler: function(request, reply){
		reply()
	}
}),

server.route({
	method:'GET',
	path:'/articles/edit/'
	handler: function(request, reply){
		reply()
	}
}),

 /*server.route({
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
	});*/

];
