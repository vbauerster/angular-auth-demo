var inject = ['authService', '$state', '$log'];
var controller = function (authService, $state, $log) {
    this.submit = function () {
        var user = this.user;
        console.log(user);
        if (authService.authenticate(user.name, user.password)) {
            $state.go('home');
        } else {
            $log.debug('invalid credentials');
        }
    };
};
controller.$inject = inject;
export default controller;
