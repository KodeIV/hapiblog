var Handler = require('./handlers');
module.exports = [
    {
        path: "/login",
        method: ["GET", "POST"],
        config: {
            auth: 'facebook',
            handler: Handler.sessionManagement
        }

    },  

    {
        path: "/logout",
        method: "GET",
        config: {
            handler: function(request, reply) {
                request.auth.session.clear();
                return reply.redirect('http://stormy-bayou-4265.herokuapp.com/');
            }
        }
    },

    {
        path: '/',
        method: 'GET',
        config: {  // try with redirectTo disabled makes isAuthenticated usefully available
            auth: {
                strategy: 'session',
                mode: 'try'
            },
            plugins: { 'hapi-auth-cookie': { redirectTo: false } }
        },
        handler: function(request, reply) {
            reply.view('base.jade', {
                auth: JSON.stringify(request.auth),
                session: JSON.stringify(request.session),
                isLoggedIn: request.auth.isAuthenticated
            });
        }
    },

    {
        path: '/myprofile',
        method: 'GET',
        config: {
            auth: 'session',
            handler: function(request, reply) {
                reply('<html><head><title>Login page</title></head><body><h3>Welcome '
                  + JSON.stringify(request.auth.credentials, null, 4)
                  + '!</h3><br/><form method="get" action="/logout">'
                  + '<input type="submit" value="Logout">'
                  + '</form></body></html>');
            }
        }
    }
];
