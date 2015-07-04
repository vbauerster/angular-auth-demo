var app = angular.module('demo', [])
    .controller('WelcomeController', ['$scope', function($scope) {
        $scope.greeting = 'Welcome!';
    }]);

export default app;