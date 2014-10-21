var mongo = require("mongodb");


module.exports = {
	home: function(request, reply) {
		        
		        //var names = request.params.name.split("/");
		    reply.view("hello", {
		        first: "Dan",
		        last: "Sofer",
		        mood: "neutral",
		        colour: "green"
		    });
		}

	articles:function(request, reply){
			reply('This is the landing page.</br> Post 1.</br> Post 2')
		}

}