var handlers = require("../handlers/commentHandlers.js"); 

module.exports = [
{
		path: "/home",
		method: "GET",
		handler: 
			handlers.insertComment
		
	},]