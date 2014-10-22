var Hapi = require("hapi");
var joi = require("joi");
var server = new Hapi.Server("localhost", 8000);
module.exports = server;

var viewpoints = {
    engines: {
        jade: require("jade")
    },
	path: "./views/hello.jade"
};

server.views(viewpoints);

server.route({
	method:'GET',
	path:'/articles/',
	handler: function(request, reply){
		reply('This is the landing page.</br> Post 1.</br> Post 2')
	}
});


server.route({
	method:'GET',
	path:'/articles/{i}/',
	handler: function(request, reply){
		reply('page one')
	}
});

server.route({
	method:'GET',
	path:'/articles/new/',
	handler: function(request, reply){
		reply('Create new articles')
	}
});

server.route({
	method:'GET',
	path:'/articles/edit/',
	handler: function(request, reply){
		reply('Edit existing articles')
	}
});

if(!module.parent){
	server.start(function() {
    	console.log("Hapi server started @", server.info.uri);
	});
}
