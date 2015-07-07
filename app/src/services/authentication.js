/**
 * Don't use in prod)
 * @returns {{authenticace: Function, isAuthenticated: Function}}
 */
export default function () {
    var userMap = {
        admin: 'secret'
    };
    var authenticated = false;
    return {
        authenticate: function (user, password) {
            if (user == null || password == null) {
                return false;
            }
            return authenticated = (userMap[user] === password);
        },
        isAuthenticated: function () {
            return authenticated;
        }
    };
};