var inject = ['authService', '$state', '$log'];
var loginCtrl = function (authService, $state, $log) {

    var controller = this;

    controller.submit = function () {
        var user = controller.user || {};
        var form = controller.loginForm;
        form.submitDisabled = true;

        authService.authenticate(user.name, user.password).then(function (user) {
            $log.debug('success:', user);
            $state.go('home');
        }, function (reject) {
            $log.debug('invalid credentials:', reject);
            controller.hint = true;
        })['finally'](function () {
            form.submitDisabled = false;
        });
    };
};
loginCtrl.$inject = inject;
export default loginCtrl;
