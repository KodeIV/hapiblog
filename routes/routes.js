var handlers = require("../handlers/handlers.js"); 

module.exports = [
	{
		path: "/home",
		method: "GET",
		handler: 
			handlers.home
		
	},

	// {
	// 	method:'GET',
	// 	path:'/articles/',
	// 	handler: function(request, reply){
	// 		handlers.articles(request, response);
	// 	}
	// },

	// {
	// 	method:'GET',
	// 	path:'/articles/{i}/'
	// 	handler: function(request, reply){
	// 		reply()
	// 	}
	// });

	// server.route({
	// 	method:'GET',
	// 	path:'/articles/new/'
	// 	handler: function(request, reply){
	// 		reply()
	// 	}
	// });

	// {
	// 	method:'GET',
	// 	path:'/articles/edit/'
	// 	handler: function(request, reply){
	// 		reply()
	// 	}
	// });

	// {
	//     method: 'GET',
	//     path: '/',
	//     config: {
	//       handler: function(request, reply) {
	//         reply(results)
	//       }

	//     }
	// 	});
]