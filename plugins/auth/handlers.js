//Handler functions used by the routes.
exports.sessionManagement = function(request, reply) {
    var account = request.auth.credentials;
    var sid = account.profile.id;
    
        request.auth.session.set({
            sid: sid
        });
        return reply.redirect('/home');
};
