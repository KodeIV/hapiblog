var handlers = require("../handlers/commentHandlers.js"); 

module.exports = 
{
		path: "/",
		method: "GET",
		handler: 
			handlers.insertComment
		
	}