var app = angular.module('demo', [])
    .controller('WelcomeController', function($scope) {
        $scope.greeting = 'Welcome!';
    });

export default app;