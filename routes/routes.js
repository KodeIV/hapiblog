var handlers = require("../handlers/handlers.js");

module.exports = [
	{
		path: "/home",
		method: "GET",
		config: {
			handler: handlers.home,
			cache: {
			expiresIn: 30000,
			// staleIn: 15000,
			// staleTimeout: 1000
			}
		}
	},

	{
	    path: '/{param*}',
	    method: 'GET',
	    handler: handlers.publicfiles,

	},

	{
		path: "/articles/{id}",
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
		path:'/articles/new',
		handler: handlers.insertNewPost
	},

	{
		method: 'GET',
		path:'/articles/new',
		handler: handlers.getForm

	},

	{
		method:'GET',
		path:'/articles/edit',
		handler: handlers.editArticle
		},


	{
        method: ['GET', 'POST'], // Must handle both GET and POST
        path: '/login',          // The callback endpoint registered with the provider
        config: {
            auth: 'facebook',
            handler: handlers.authenticate
        }
    },

    {
    	method: 'POST',
    	path: '/articles/{id}',
    	handler: handlers.commentToDb
    }


	/*{
		method: 'POST',
		path: '/articles/edit',
		handler: handlers.saveChanges

	}*/

];
