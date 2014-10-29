var Hapi = require("hapi");
var hapi_mongodb = require("hapi-mongodb");
var Path = require('path');
var routes = require("./routes/routes.js");
var routes2 = require("./routes/routes2.js");

var serverConfig = {
    cache: require ('catbox-memory')
  };


var pack = new Hapi.Pack();
var s1 = pack.server(8080, "localhost");
var s2 = pack.server(8081, "localhost");
var dbOpts = {
    "url": "mongodb://KodeIV:KoDeIv@linus.mongohq.com:10038/KodeIVMongo",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};


var loggingOptions = require('./test/logOptions.js');

pack.register({
    plugin: require('good'),
    options: loggingOptions
}, function(err) {
    if (err){
        console.log(err);
        return;
    }
});


pack.register({
    plugin: hapi_mongodb,
    options: dbOpts
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});





var viewpoints = {
                    engines: {
                      jade: require("jade")
                    },
                  	path: "./views"
                  }

//module.exports = s1;
//module.exports = s2;



s1.views(viewpoints)

s1.route(routes);
s2.route(routes2);

if(!module.parent){
	pack.start(function() {
    	console.log("Hapi pack started ");

	});
}
