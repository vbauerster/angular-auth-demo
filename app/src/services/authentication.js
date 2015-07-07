/**
 * Don't use in prod)
 * @returns {{authenticace: Function, isAuthenticated: Function}}
 */
var inject = ['$timeout'];
var authService = function ($timeout) {
    var userMap = Object.create(null, {
        admin: {
            value: {
                firstName: 'Vladimir',
                lastName: 'Bauer',
                role: 'admin'
            }
        }
    });
    var passwordMap = Object.create(null, {
        admin: {value: 'secret'}
    });
    var authenticated = false;
    return {
        authenticate: function (name, password) {
            var promise = $timeout(function () {
                var user = userMap[name];
                if (user && passwordMap[name] === password) {
                    authenticated = true;
                    return user;
                } else {
                    $timeout.cancel(promise);
                }
            }, 300);
            return promise;
        },
        isAuthenticated: function () {
            return authenticated;
        },
        logOut: function () {
            authenticated = false;
        }
    };
};
authService.$inject = inject;
export default authService;
