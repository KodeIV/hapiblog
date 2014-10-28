var Hapi = require("hapi");
var joi = require("joi");
var Path = require('path'); 
var routes = require("./routes/routes.js");
var pack = new Hapi.Pack();
var s1 = pack.server(8080, "localhost");
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


s1.pack.register({
    plugin: require('hapi-mongodb'),
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

module.exports = s1;

s1.views(viewpoints)

if(!module.parent){
	pack.start(function() {
    	console.log("Hapi pack started @", s1.info.uri);

	});
}
   
s1.route(routes);