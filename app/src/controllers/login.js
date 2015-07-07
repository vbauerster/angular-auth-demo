var inject = ['authService', '$state', '$log', '$timeout'];
var controller = function (authService, $state, $log, $timeout) {

    this.submit = function () {
        var user = this.user || {};
        //$log.debug(user);
        //$log.debug(authService.authenticate(user.name, user.password));

        authService.authenticate(user.name, user.password).then(function (user) {
            $log.debug('success:', user);
            $state.go('home');
        }, function (reject) {
            $log.debug('reject:', reject);
            $log.debug('invalid credentials');
        });
    };
};
controller.$inject = inject;
export default controller;
