var handlers = require("./handlers.js"); 

module.exports = {


	server.route({
		path: "/home",
		method: "GET",
		handler: function(request, response){
			handlers.home(request, response);
		} 
	});

	server.route({
		method:'GET',
		path:'/articles/',
		handler: function(request, reply){
			handlers.articles(request, response);
		}
	})

	server.route({
		method:'GET',
		path:'/articles/{i}/'
		handler: function(request, reply){
			reply()
		}
	})

	server.route({
		method:'GET',
		path:'/articles/new/'
		handler: function(request, reply){
			reply()
		}
	})

	server.route({
		method:'GET',
		path:'/articles/edit/'
		handler: function(request, reply){
			reply()
		}
	})
}