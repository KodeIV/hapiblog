var Routes = require("./route.js");

exports.register = function(plugin, options, next) {

    plugin.auth.strategy('facebook', 'bell', {
                provider: 'facebook',
                password: 'hapiauth',
                clientId: '562715117207744', 
                clientSecret: 'f33a41096a843319154ccb80ece9104e', 
                isSecure: false 
            });
    plugin.auth.strategy('google', 'bell', {
    			provider: 'google',
    			password: 'hapiauth',
    			clientId: '1041912393604-ac94ec4anesepq0rurjsmed63336jiiv.apps.googleusercontent.com',
    			clientSecret: 'RPjLaDOF5k4bGDfNs_ggtdB6',
    			isSecure: false

    });

    plugin.auth.strategy('session', 'cookie', {
        password: 'hapiauth', // 
        cookie: 'sessiong', // 
        redirectTo: '/',
        isSecure: false,
    });

    plugin.route(Routes);
    next();
};

exports.register.attributes = {
    pkg: require("./package.json")
};