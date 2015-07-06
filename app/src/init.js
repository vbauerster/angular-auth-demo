var inject = ['$rootScope', '$state', 'authService'];
var init = function ($rootScope, $state, authService) {

    // enumerate states that don't need authentication
    var statesThatDontRequireAuth = ['login'];

    var isGoingToStateInStatesThatDontRequireAuth = function (state) {
        return statesThatDontRequireAuth.some(function (noAuthRoute) {
            return state === noAuthRoute;
        });
    };

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        // if state requires auth and user is not logged in
        if (!isGoingToStateInStatesThatDontRequireAuth(to.name) && !authService.isAuthenticated()) {
            // redirect back to login
            ev.preventDefault();
            $state.go('login', {notify: false});
        }
    });
};
init.$inject = inject;
export default init;