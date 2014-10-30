var handlers = require("../handlers/commentHandlers.js");

module.exports = {
		path: "/",
		method: "GET",
		config: {
			handler: handlers.insertComment,
			cache: {
				expiresIn: 30000
			}
	}
};	
