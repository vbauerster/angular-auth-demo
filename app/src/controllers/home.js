var inject = ['$scope', '$state', 'authService'];
var homeCtrl = function ($scope, $state, authService) {
    $scope.greeting = 'Hello World!';

    $scope.logOut = function (argument) {
        authService.logOut();
        $state.reload();
    };
};
homeCtrl.$inject = inject;
export default homeCtrl;
