var handlers = require("../handlers/handlers.js"); 

module.exports = [
	{
		path: "/home",
		method: "GET",
		handler: 
			handlers.home
		
	},

	{
	    path: '/{param*}',
	    method: 'GET',
	    handler: 
	    	handlers.publicfiles

	},

	{
		path: "/articles/delete/{id}",
		method: "DELETE",
		handler: handlers.deleteContent
	},

	{
	    method  : "GET",
	    path   : "/articles/{id}",
	    handler : handlers.getSpecificPost
	},

	{
		method:'POST',
		path:'/articles/new/',
		handler: handlers.insertNewPost
	}


	// {
	// 	method:'GET',
	// 	path:'/articles/edit/'
	// 	handler: function(request, reply){
	// 		reply()
	// 	}
	// });

]