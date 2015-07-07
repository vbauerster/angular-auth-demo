/**
 * Don't use in prod)
 * @returns {{authenticace: Function, isAuthenticated: Function, getCurrentUser: Function, logOut: Function}}
 */
var inject = ['$timeout'];
var authService = function ($timeout) {
    var userMap = Object.create(null, {
        admin: {
            value: {
                firstName: 'Dear',
                lastName: 'Friend',
                role: 'admin'
            }
        }
    });
    var passwordMap = Object.create(null, {
        admin: {value: 'secret'}
    });
    var authenticated = false;
    var currentUser = null;
    return {
        authenticate: function (name, password) {
            var promise = $timeout(function () {
                var user = userMap[name];
                if (user && passwordMap[name] === password) {
                    authenticated = true;
                    currentUser = user;
                    return currentUser;
                } else {
                    $timeout.cancel(promise);
                }
            }, 300);
            return promise;
        },
        isAuthenticated: function () {
            return authenticated;
        },
        getCurrentUser: function () {
            if (authenticated) {
                return currentUser;
            }
        },
        logOut: function () {
            authenticated = false;
            currentUser = null;
        }
    };
};
authService.$inject = inject;
export default authService;
